import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './IndividualVendorDisplay.scss';
import IndividualVendorCocktails from "./individualVendorCocktails/IndividualVendorCocktails";
import history from "../../../history";
import Button from '../../sitewideDisplayComponents/Button';
import Link from '../../utilityComponents/link';

const FIND_VENDOR = `
  query FindVendor($slug: String!) {
    findVendor(vendor: { slug: $slug }) {
      physicalStreetAddress
      physicalCity
      dbaName
      doesDelivery
      doesPickup
      cocktails {
        slug
        name
        ingredients
        image
        price
        servingSize
        profile
        description
      }
    }
  }
  `;

function IndividualVendorDisplay(props) {
  const { loading, error, data } = useQuery(FIND_VENDOR, {
    variables: { slug: props.slug },
  });
  let vendor;
  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';
  if (data) {
    console.log(data.findVendor);
    vendor = data.findVendor;
  }

  let availability;

  let schedule = "Available Today";
  let scheduleStatus = s.schedule_status;

  if (data.findVendor) {
    if (vendor.doesDelivery === true && vendor.doesPickup === true) {
      availability =
        ' available for pickup or delivery to your current address';
    } else if (vendor.doesDelivery === true && vendor.doesPickup === false) {
      availability =
        ' available for delivery to your current address, but not pickup';
    } else {
      availability =
        ' available for pickup, but not delivery to your current address';
    }
  }

  return (
    <div className={s.vendor_display_content}>
      {data.findVendor && (
        <div className={s.vendor_display}>
          <div className={s.text}>
            <div className={s.vendor_name}>{vendor.dbaName}</div>

            <span className={s.schedule}>
              <span className={scheduleStatus}>{schedule} </span>
              until 12 AM
            </span>

            <div className={s.address}>
              {`${vendor.physicalStreetAddress}, ${vendor.physicalCity}`}
            </div>
          </div>

          <IndividualVendorCocktails
            cocktails={vendor.cocktails}
            vendor={vendor}
          />

          <div className={s.selectors}>
            <div
              className={s.secondary_selector}
              onClick={e => history.push('/search-results')}
            >Return To Search</div>

            <div className={s.primary_selector}>Order Cocktails</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default withStyles(s)(IndividualVendorDisplay);
