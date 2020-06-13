import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import s from './CocktailListItem.scss';
import endTimeRendering from '../../../consts/endTimeRendering';
import startTimeRendering from '../../../consts/startTimeRendering';
import history from '../../../history';
import Image from '../../sitewideDisplayComponents/Image'

function CocktailListItem(props) {
  const { vendor } = props;
  const { cocktail } = props;
  const { availabilityStatus } = props;
  const { availabilityTime } = props;
  const [itemStatus, setItemStatus] = useState(s.inactive);
  let fulfillmentOptions;
  if (vendor.doesDelivery && vendor.doesPickup) {
    fulfillmentOptions = 'Delivery or Pickup';
  } else if (!vendor.doesDelivery && vendor.doesPickup) {
    fulfillmentOptions = 'Pickup Only';
  } else {
    fulfillmentOptions = 'Delivery Only';
  }

  return (
    <div className={itemStatus}>
      <div index={cocktail.id} className={s.list_item_open}>
        <div>
          <img
            className={s.cocktail_image}
            src={cocktail.image}
            alt={`${cocktail.name} Image`}
          />
          <div className={s.vendor_name}>Sold by {vendor.dbaName}</div>
          {availabilityStatus === 'Available Today' && (
            <div>
              <div className={s.availability_today}>{availabilityStatus}</div>
              {itemStatus === s.active && (
                <div className={s.availability_today}>
                  Until {endTimeRendering(availabilityTime)}
                </div>
              )}
            </div>
          )}

          {availabilityStatus !== 'Available Today' && (
            <div>
              <div className={s.availability_tomorrow}>
                {availabilityStatus}
              </div>
              {itemStatus === s.active && (
                <div className={s.availability_tomorrow}>
                  At {startTimeRendering(availabilityTime)}
                </div>
              )}
            </div>
          )}

          {itemStatus === s.active && (
            <div
              className={s.order}
              onClick={e => history.push(`/vendor/${vendor.slug}`)}
            >
              Order {fulfillmentOptions}
            </div>
          )}
        </div>

        <div className={s.result_text}>
          <div className={s.cocktail_name}>{cocktail.name}</div>
          <div className={s.price}>
            ${cocktail.price} / {cocktail.servingSize} oz serving
          </div>
          <div className={s.ingredients}>
            {cocktail.ingredients} {cocktail.ingredients.length}
          </div>

          {itemStatus === s.active && (
            <div>
              <div className={s.description}>
                {cocktail.description} {cocktail.description.length}
                {cocktail.description} {cocktail.description.length}
              </div>
              <div
                className={s.expand}
                onClick={e => setItemStatus(s.inactive)}
              >
                Show Less{` `}
                <FontAwesomeIcon icon={faChevronUp} size="xs" />
              </div>
            </div>
          )}

          {itemStatus === s.inactive && (
            <div className={s.expand} onClick={e => setItemStatus(s.active)}>
              More Details{` `}
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(CocktailListItem);
