import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorDisplay.scss';
import Button from '../displayComponents/buttonComponents/Button/Button';
import Link from '../utilityComponents/link/Link';
import db from '../../data/dbSimulator/bars';

class VendorDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let vendor;

    db.map(vendorEntry => {
      if (vendorEntry.id === this.props.id) {
        vendor = vendorEntry;
      }
    });

    let availability;

    if (vendor.doesDelivery === true && vendor.doesPickup === true) {
      availability =
        ' sells cocktails for pickup or delivery to your current address';
    } else if (vendor.doesDelivery === true && vendor.doesPickup === false) {
      availability =
        ' will deliver to you but does not sell cocktails for pickup';
    } else {
      availability =
        ' sells cocktails for pickup, but does not deliver to your current address';
    }

    return (
      <div className={s.search_result_content}>
        <div className={s.vendor_display}>
          <div className={s.vendor_name}>{vendor.dbaName}</div>

          <div className={s.address}>
            {`${vendor.physicalStreetAddress}, ${vendor.physicalCity}`}
          </div>

          <div className={s.details}>
            <div className={s.availability}>
              {vendor.dbaName + availability}
            </div>
          </div>

          <div className={s.cocktails}>
            {vendor.cocktails.map(cocktail => {
              return (
                <div className={s.cocktail}>
                  <img
                    className={s.cocktail_image}
                    src="/../../../Urbana.jpg"
                  />
                  <div className={s.cocktail_text}>
                    {cocktail.ingredients.map(ingredient => {
                      return `${ingredient}, `;
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={s.buttons}>
            <Link to="/search-results">
              <Button type="Secondary" text="Back To Search Results" />
            </Link>

            <Link to="">
              <Button type="Primary" text="Order Cocktails" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(VendorDisplay);
