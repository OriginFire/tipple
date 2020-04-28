import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './individualVendorDisplay.scss';
import Button from '../../sitewideDisplayComponents/Button';
import Link from '../../utilityComponents/link';
import db from '../../../data/dbSimulator/Vendors';

// action frontEndName(params) {
//  backendName(params) {
//    returns
//   }
// }
const FIND_VENDOR = `
  query FindVendor($slug: String!) {
    findVendor(vendor: { slug: $slug }) {
      physicalStreetAddress
      physicalCity
      dbaName
      cocktails {
        id
        name
        ingredients
        image
      }
    }
  }
  `;

function IndividualVendorDisplay(props) {
  const { loading, error, data } = useQuery(FIND_VENDOR, {
    variables: { slug: props.id },
  });

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';

  const graphVendor = data.findVendor;
  let vendor;

  // Map function will disappear when hookup to dummy DB is replaced
  db.map(vendorAccount => {
    if (props.id === vendorAccount.id) {
      vendor = vendorAccount;
      console.log(graphVendor)
    }
  });
  let availability;

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

  return (
    <div className={s.vendor_display_content}>
      <div className={s.vendor_display}>
        <div className={s.text}>
          <div className={s.vendor_name}>{vendor.dbaName}</div>

          <div className={s.address}>
            {`${vendor.physicalStreetAddress}, ${vendor.physicalCity}`}
          </div>

          <div className={s.availability}> Displaying all cocktails sold by {vendor.dbaName}, {availability}</div>
        </div>

        <div className={s.cocktails}>
          {vendor.cocktails.map((cocktail, index) => {
            return (
              <div key={index} className={s.cocktail}>
                <img className={s.cocktail_image} src={cocktail.image} />
                <div className={s.cocktail_text}>
                  <div className={s.cocktail_name}>{cocktail.name}</div>
                  <div className={s.cocktail_ingredients}>
                    {cocktail.ingredients}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={s.buttons}>
          <Link to="/search-results">
            <Button type="Secondary" text="Return To Search Results" />
          </Link>

          <Link to="">
            <Button type="Primary" text="Order From This Vendor" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(IndividualVendorDisplay);
