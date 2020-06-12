import React, { useContext, useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import s from './VendorListItem.scss';
import history from '../../../history';
import AvailabilityData from "../availabilityData/AvailabilityData";
import SearchContext from "../SearchContext";

function VendorListItem(props) {
  const { vendor } = props;
  const { index } = props;
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

  let availabilityData = new AvailabilityData(vendor.availability, searchContext.searchFilters, vendor);
  let availabilityStatus = availabilityData.resolveAvailabilityStatus().status;
  let availabilityTime = availabilityData.resolveAvailabilityStatus().time;

  return (
    <div
      key={index}
      className={s.list_item}
      // onClick={e => history.push(`/vendor/${vendor.slug}`)}
    >
      <div className={s.vendor_box}>
        <div className={s.bar_name}>{vendor.dbaName}</div>
        <img
          className={s.bar_image}
          src={vendor.vendorImage}
        />
        <div className={s.address}>
          {`${vendor.physicalStreetAddress}, ${vendor.physicalCity}`}
        </div>
      </div>

      <div className={s.result_text}>
        <div className={s.access_details}>
          <div className={s.availability}>{availability(vendor)}</div>
          <div className={s.availability_time}>
            <span className={s.availability_status}>Available Tomorrow</span> at 11 PM
          </div>
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
