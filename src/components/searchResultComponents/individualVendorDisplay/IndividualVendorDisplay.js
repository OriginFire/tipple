import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './IndividualVendorDisplay.scss';
import IndividualVendorCocktails from './individualVendorCocktails/IndividualVendorCocktails';
import history from '../../../history';
import ContentBox from '../../sitewideDisplayComponents/contentBox/ContentBox';

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

  const schedule = 'Available Today';
  const scheduleStatus = s.schedule_status;

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
    <div>
      {data.findVendor && (
        <ContentBox>
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
        </ContentBox>
      )}
    </div>
  );
}

export default withStyles(s)(IndividualVendorDisplay);
