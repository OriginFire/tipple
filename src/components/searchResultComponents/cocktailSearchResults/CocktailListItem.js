import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import s from './CocktailListItem.scss';
import history from '../../../history';

function daysToNumbers(day) {
  switch (day) {
    case 'Sunday':
      return 0;
      break;
    case 'Monday':
      return 1;
      break;
    case 'Tuesday':
      return 2;
      break;
    case 'Wednesday':
      return 3;
      break;
    case 'Thursday':
      return 4;
      break;
    case 'Friday':
      return 5;
      break;
    case 'Saturday':
      return 6;
      break;
  }
}

function CocktailListItem(props) {
  const { vendor } = props;
  const { cocktail } = props;
  const { index } = props;
  const { availability } = props;
  const [isOpen, setIsOpen] = useState(false);
  let fulfillmentOptions;

  if (vendor.doesDelivery && vendor.doesPickup) {
    fulfillmentOptions = 'Delivery or Pickup';
  } else if (!vendor.doesDelivery && vendor.doesPickup) {
    fulfillmentOptions = 'Pickup Only';
  } else {
    fulfillmentOptions = 'Delivery Only';
  }

  const currentDateTime = new Date();
  console.log(
    currentDateTime.getTime(),
    currentDateTime.getDay(),
    currentDateTime.getHours(),
    currentDateTime.getMinutes(),
  );

  let availabilityStatus = 'Not Available Today';
  let availabilityTime = 0;

  availability.map(availabilityType => {
    let fulfillmentMinimum;
    let showAvailabilityCheck;
    if (availabilityType.type === 'pickup') {
      showAvailabilityCheck === vendor.doesPickup; // Change this to the filterSettings.doesPickup value
      fulfillmentMinimum = vendor.minimumPickupFulfillment;
    } else {
      showAvailabilityCheck === vendor.doesDelivery; // Change this to the filterSettings.doesDelivery value
      fulfillmentMinimum = vendor.minimumDeliveryFulfillment;
    }
    availabilityType.availabilityDaysAndTimes.map(daySchedule => {
      if (
        daySchedule.hours.length !== 0 &&
        daysToNumbers(daySchedule.day) === currentDateTime.getDay()
      ) {
        if (
          currentDateTime.getHours() + fulfillmentMinimum <
            Math.max(...daySchedule.hours) &&
          showAvailabilityCheck
        ) {
          availabilityStatus = 'Available Today';
          if (availabilityTime < Math.max(...daySchedule.hours)) {
            availabilityTime = Math.max(...daySchedule.hours);
          }
        }
      }
    });
  });

  function DisplayContent() {
    if (isOpen) {
      return (
        <div className={s.active}>
          <div index={index} className={s.list_item_open}>
            <div>
              <img
                className={s.cocktail_image}
                src={cocktail.image}
                alt={`${cocktail.name} Image`}
              />
              <div className={s.vendor_name}>Sold by {vendor.dbaName}</div>
              <div className={s.availability_today}>{availabilityStatus}</div>
              <div className={s.availability_today}>
                Until {availabilityTime}
              </div>
              <div
                className={s.order}
                onClick={e => history.push(`/vendor/${vendor.slug}`)}
              >
                Order {fulfillmentOptions}
              </div>
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
        <div index={index} className={s.list_item}>
          <div>
            <img
              className={s.cocktail_image}
              src={cocktail.image}
              alt={`${cocktail.name} Image`}
            />
            <div className={s.vendor_name}>Sold by {vendor.dbaName}</div>
            <div className={s.availability_today}>{availabilityStatus}</div>
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

  return <div className={s.pass_through}>{DisplayContent()}</div>;
}

export default withStyles(s)(CocktailListItem);
