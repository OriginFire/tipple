import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './vendorResultsList.scss';
import history from '../../../history';

function VendorListItem(props) {
  const [expanded, setExpanded] = useState(false);
  const { vendor } = props;
  const { index } = props;
  let lowPrice;
  let highPrice;
  console.log(vendor.cocktails);

  function availability(vendor) {
    if (vendor.doesPickup === true && vendor.doesDelivery === true) {
      return 'Delivery or Pickup';
    }
    if (vendor.doesPickup === false && vendor.doesDelivery === true) {
      return 'Delivery Only';
    }
    return 'Pickup Only';
  }

  function cocktailRange(cocktails) {
    let prices = [];
    cocktails.forEach(cocktail => {
      if (cocktail.price) {
        console.log(cocktail.price);
        prices.push(cocktail.price);
      }
    });
    lowPrice = Math.min.apply(null, prices).toFixed(2);
    highPrice = Math.max.apply(null, prices).toFixed(2);
    return `$${lowPrice} - $${highPrice}`;
  }

  return (
    <div
      key={index}
      className={s.list_item}
      onClick={e => history.push(`/vendor/${vendor.slug}`)}
    >
      <div className={s.crap}>
        <div className={s.bar_name}>{vendor.dbaName}</div>
        <img
          className={s.bar_image}
          src={`data:image/jpg;base64,${vendor.vendorImage}`}
        />
        <div className={s.cocktails}>{vendor.cocktails.length.toString()} cocktails sold</div>
        <div className={s.cocktails}>{cocktailRange(vendor.cocktails)} / serving</div>
      </div>

      <div className={s.result_text}>
        <div className={s.availability}>{availability(vendor)}</div>
        <div className={s.address}>
          {`${vendor.physicalStreetAddress}, ${vendor.physicalCity}`}
        </div>
        <div className={s.info}>Scheduled delivery available today</div>
        <div className={s.info}>
          Scheduled pickup available today until 11 PM
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(VendorListItem);
