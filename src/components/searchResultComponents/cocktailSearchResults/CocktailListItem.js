import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import s from './CocktailListItem.scss';
import history from '../../../history';

function CocktailListItem(props) {
  const { vendor } = props;
  const { cocktail } = props;
  const { index } = props;
  const [isOpen, setIsOpen] = useState(false);
  let availability;

  if (vendor.doesDelivery && vendor.doesPickup) {
    availability = 'Delivery or Pickup';
  } else if (!vendor.doesDelivery && vendor.doesPickup) {
    availability = 'Pickup Only';
  } else {
    availability = 'Delivery Only';
  }

  function DisplayContent() {
    if (isOpen) {
      return (
        <div className={s.active}>
          <div
            index={index}
            className={s.list_item_open}
          >
            <div>
              <img
                className={s.cocktail_image}
                src={cocktail.image}
                alt={`${cocktail.name} Image`}
              />
              <div className={s.vendor_name}>Sold by {vendor.dbaName}</div>
              <div className={s.availability}>Available Today</div>
              <div className={s.order} onClick={e => history.push(`/vendor/${vendor.slug}`)}>Order {availability}</div>
            </div>

            <div className={s.result_text}>
              <div className={s.cocktail_name}>{cocktail.name}</div>
              <div className={s.price}>
                ${cocktail.price} / {cocktail.servingSize} oz serving
              </div>
              <div className={s.ingredients}>
                {cocktail.ingredients} {cocktail.ingredients.length}
              </div>
              <div className={s.description}>
                {cocktail.description} {cocktail.description.length}
                {cocktail.description} {cocktail.description.length}
              </div>
              <div className={s.expand} onClick={e => setIsOpen(false)}>
                Show Less{` `}
                <FontAwesomeIcon icon={faChevronUp} size="xs" />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={s.inactive}>
        <div
          index={index}
          className={s.list_item}
        >
          <div>
            <img
              className={s.cocktail_image}
              src={cocktail.image}
              alt={`${cocktail.name} Image`}
            />
            <div className={s.vendor_name}>Sold by {vendor.dbaName}</div>
            <div className={s.availability}>Available Today</div>
          </div>

          <div className={s.result_text}>
            <div className={s.cocktail_name}>{cocktail.name}</div>
            <div className={s.price}>
              ${cocktail.price} / {cocktail.servingSize} oz serving
            </div>
            <div className={s.ingredients}>
              {cocktail.ingredients} {cocktail.ingredients.length}
            </div>
            <div className={s.expand} onClick={e => setIsOpen(true)}>
              More Details{` `}
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div className={s.no_crash}>{DisplayContent()}</div>;
}

export default withStyles(s)(CocktailListItem);
