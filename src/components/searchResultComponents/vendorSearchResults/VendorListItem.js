import React, { useContext, useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import s from './VendorListItem.scss';
import history from '../../../history';
import endTimeRendering from '../../../consts/endTimeRendering';
import startTimeRendering from '../../../consts/startTimeRendering';
import SearchContext from '../SearchContext';

function VendorListItem(props) {
  const { vendor } = props;
  const { index } = props;
  const { availabilityStatus } = props;
  const { availabilityTime } = props;
  const searchContext = useContext(SearchContext);
  let lowPrice;
  let highPrice;

  function availability(vendor) {
    if (vendor.doesPickup === true && vendor.doesDelivery === true) {
      return 'Deliveries or Pickups';
    }
    if (vendor.doesPickup === false && vendor.doesDelivery === true) {
      return 'Deliveries Only';
    }
    return 'Pickups Only';
  }

  function cocktailRange(cocktails) {
    const prices = [];
    cocktails.forEach(cocktail => {
      if (cocktail.price) {
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
      // onClick={e => history.push(`/vendor/${vendor.slug}`)}
    >
      <div className={s.vendor_box}>
        <div className={s.bar_name}>{vendor.dbaName}</div>
        <img className={s.bar_image} src={vendor.vendorImage} />
        <div className={s.address}>
          {`${vendor.physicalStreetAddress}, ${vendor.physicalCity}`}
        </div>
      </div>

      <div className={s.result_text}>
        <div className={s.access_details}>
          <div className={s.availability}>{availability(vendor)}</div>

          {availabilityStatus === 'Available Today' && (
            <div className={s.availability_time}>
              <span className={s.availability_status}>
                {availabilityStatus}
              </span>{' '}
              at {startTimeRendering(availabilityTime)}
            </div>
          )}
        </div>
        <div>
          <div className={s.info}>
            {vendor.cocktails.length.toString()} cocktails sold
          </div>
          <div className={s.info}>
            {cocktailRange(vendor.cocktails)} / serving
          </div>
          <div className={s.info}>On-Demand / Scheduled Sale</div>
        </div>

        <div
          className={s.expand}
          onClick={e => history.push(`/vendor/${vendor.slug}`)}
        >
          More Details{` `}
          <FontAwesomeIcon icon={faChevronRight} size="xs" />
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(VendorListItem);
