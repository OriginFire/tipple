import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faShareSquare,
  faStore,
  faGlassWhiskey,
  faCocktail,
  faWineBottle,
  faWineGlass,
} from '@fortawesome/free-solid-svg-icons';
import s from './FilterSettings.scss';

function FilterSettings(props) {
  const [filterSettings, setFilterSettings] = useState(props.settings);

  let miles;
  if (filterSettings.pickupRadius === 1) {
    miles = 'mile';
  } else {
    miles = 'miles';
  }

  let cocktailMessage;


  let orderingMessage;
  if (filterSettings.doesDelivery && filterSettings.doesPickup) {
    orderingMessage = `Showing vendors that deliver to your current address or offer pickup within ${filterSettings.pickupRadius} ${miles}`;
  } else if (filterSettings.doesPickup && !filterSettings.doesDelivery) {
    orderingMessage = `Showing only vendors that offer pickup within ${filterSettings.pickupRadius} ${miles} of your address`;
  } else if (filterSettings.doesDelivery && !filterSettings.doesPickup) {
    orderingMessage = `Showing only vendors that deliver to your current address`;
  } else {
    orderingMessage = `No vendors will be displayed unless you select either delivery or pickup`;
  }

  let priceLimit;
  if (filterSettings.highPrice === null || filterSettings.highPrice === '') {
    priceLimit = 'with servings of any price';
  } else {
    priceLimit = `under $${filterSettings.highPrice} / serving`;
  }

  let availabilityMessage;
  if (filterSettings.availableTodayOnly && filterSettings.onDemandOnly) {
    availabilityMessage = `Only showing cocktails/vendors available today on-demand, ${priceLimit}`;
  } else if (
    filterSettings.availableTodayOnly &&
    !filterSettings.onDemandOnly
  ) {
    availabilityMessage = `Only showing cocktails/vendors available today, ${priceLimit}`;
  } else if (
    !filterSettings.availableTodayOnly &&
    filterSettings.onDemandOnly
  ) {
    availabilityMessage = `Only showing cocktails/vendors available on-demand, ${priceLimit}`;
  } else {
    availabilityMessage = `Showing cocktails/vendors who may not be available today and may require scheduled orders, ${priceLimit}`;
  }

  function inputField() {
    if (!filterSettings.doesPickup) {
      return (
        <input
          className={s.radius}
          placeholder="Distance"
          value={filterSettings.pickupRadius}
          onChange={e =>
            setFilterSettings({
              ...filterSettings,
              pickupRadius: e.target.value,
            })
          }
          type="number"
          disabled
        />
      );
    }

    return (
      <input
        className={s.radius}
        placeholder="Distance"
        value={filterSettings.pickupRadius}
        onChange={e =>
          setFilterSettings({
            ...filterSettings,
            pickupRadius: e.target.value,
          })
        }
        type="number"
      />
    );
  }

  function classNameResolve(filterSetting) {
    if (filterSetting) {
      return s.icon_active;
    }
    return s.icon_inactive;
  }

  return (
    <div>
      <div className={s.filter_settings}>
        <div className={s.explainer}>
          To adjust search settings, (un)select options below
        </div>
        <div className={s.close} onClick={e => props.onClose(filterSettings)}>
          <FontAwesomeIcon
            icon={faTimes}
            size="lg"
            color="white"
            pull="right"
          />
        </div>

        <div className={s.settings}>
          <div className={s.cocktails}>
            <div className={s.title}>Cocktail Display</div>
            <div className={s.cocktails_settings}>
              <div
                className={classNameResolve(filterSettings.showBoozy)}
                onClick={e =>
                  setFilterSettings({
                    ...filterSettings,
                    showBoozy: !filterSettings.showBoozy,
                  })
                }
              >
                <FontAwesomeIcon icon={faGlassWhiskey} size="3x" />
              </div>
              <div
                className={classNameResolve(filterSettings.showStrong)}
                onClick={e =>
                  setFilterSettings({
                    ...filterSettings,
                    showStrong: !filterSettings.showStrong,
                  })
                }
              >
                <FontAwesomeIcon icon={faCocktail} size="3x" />
              </div>
              <div
                className={classNameResolve(filterSettings.showLong)}
                onClick={e =>
                  setFilterSettings({
                    ...filterSettings,
                    showLong: !filterSettings.showLong,
                  })
                }
              >
                <FontAwesomeIcon icon={faWineGlass} size="3x" />
              </div>
              <div
                className={classNameResolve(filterSettings.showLow)}
                onClick={e =>
                  setFilterSettings({
                    ...filterSettings,
                    showLow: !filterSettings.showLow,
                  })
                }
              >
                <FontAwesomeIcon icon={faWineBottle} size="3x" />
              </div>
            </div>
            <div className={s.setting_message}>
              Showing cocktails with the following profiles: {cocktailMessage}
            </div>
          </div>

          <div className={s.availability}>
            <div className={s.title}>Delivery and Pickup Display</div>
            <div className={s.availability_settings}>
              <div
                className={classNameResolve(filterSettings.doesDelivery)}
                onClick={e =>
                  setFilterSettings({
                    ...filterSettings,
                    doesDelivery: !filterSettings.doesDelivery,
                  })
                }
              >
                <FontAwesomeIcon icon={faShareSquare} size="3x" />
              </div>
              <div
                className={classNameResolve(filterSettings.doesPickup)}
                onClick={e =>
                  setFilterSettings({
                    ...filterSettings,
                    doesPickup: !filterSettings.doesPickup,
                  })
                }
              >
                <FontAwesomeIcon icon={faStore} size="3x" />
              </div>
              <div>{inputField()}</div>
            </div>
            <div className={s.setting_message}>{orderingMessage}</div>
          </div>

          <div className={s.ordering}>
            <div className={s.title}>Availability and Price Filters</div>
            <div className={s.ordering_settings}>
              <div
                className={classNameResolve(filterSettings.availableTodayOnly)}
                onClick={e =>
                  setFilterSettings({
                    ...filterSettings,
                    availableTodayOnly: !filterSettings.availableTodayOnly,
                  })
                }
              >
                <div className={s.text_icon}>Available Today</div>
              </div>
              <div
                className={classNameResolve(filterSettings.onDemandOnly)}
                onClick={e =>
                  setFilterSettings({
                    ...filterSettings,
                    onDemandOnly: !filterSettings.onDemandOnly,
                  })
                }
              >
                On-demand
              </div>
              <input
                className={s.price}
                placeholder="Limit Price"
                value={filterSettings.highPrice}
                onChange={e =>
                  setFilterSettings({
                    ...filterSettings,
                    highPrice: e.target.value,
                  })
                }
                type="number"
              />
            </div>
            <div className={s.setting_message}>{availabilityMessage}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(FilterSettings);
