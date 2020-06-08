import React, { useContext, useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import s from './CocktailListItem.scss';
import SearchContext from "../SearchContext";
import endTimeRendering from "../../../consts/endTimeRendering";
import startTimeRendering from "../../../consts/startTimeRendering";
import history from '../../../history';

function daysToNumbers(day) {
  switch (day) {
    case 'Sunday':
      return 0;
    case 'Monday':
      return 1;
    case 'Tuesday':
      return 2;
    case 'Wednesday':
      return 3;
    case 'Thursday':
      return 4;
    case 'Friday':
      return 5;
    case 'Saturday':
      return 6;
  }
}

function CocktailListItem(props) {
  const { vendor } = props;
  const { cocktail } = props;
  const { index } = props;
  const { availability } = props;
  const searchContext = useContext(SearchContext);
  const [filterSettings, setFilterSettings] = useState(searchContext.searchFilters);
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

  let availabilityStatus = 'Not Available Today';
  let availabilityTime = 0;

  availability.map(availabilityType => {
    let fulfillmentMinimum;
    let showAvailabilityCheck;
    if (availabilityType.availabilityType === 'pickup') {
      showAvailabilityCheck = filterSettings.doesPickup;
      fulfillmentMinimum = vendor.minimumPickupFulfillment;
    } else {
      showAvailabilityCheck = filterSettings.doesDelivery;
      fulfillmentMinimum = vendor.minimumDeliveryFulfillment;
    }
    availabilityType.availabilitySchedules.map(daySchedule => {
      if (
        daySchedule.shifts.length !== 0 &&
        daysToNumbers(daySchedule.day) === currentDateTime.getDay()
      ) {
        let latestHourOfOperation = 0;
        daySchedule.shifts.map(shift => {
          if (shift.endHour > latestHourOfOperation) {
            latestHourOfOperation = shift.endHour;
          }
        });
        console.log(latestHourOfOperation);
        if (
          currentDateTime.getHours() + fulfillmentMinimum <
            latestHourOfOperation &&
          showAvailabilityCheck
        ) {
          availabilityStatus = 'Available Today';
          if (availabilityTime < latestHourOfOperation) {
            availabilityTime = latestHourOfOperation;
          }
        } else {
          // aggressive block finding the next availability day and rendering earliest available time
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
                Until {endTimeRendering(availabilityTime)}
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
            {(availabilityStatus === "Available Today") &&
              <div className={s.availability_today}>{availabilityStatus}</div>
            }

            {(availabilityStatus === "Not Available Today") &&
            <div className={s.availability_tomorrow}>Next Available on {nextAvailability}</div>
            }
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
