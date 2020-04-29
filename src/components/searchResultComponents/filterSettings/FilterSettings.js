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
  let availabilityMessage;
  let miles;

  if (filterSettings.pickupRadius === 1) {
    miles = "mile";
  } else {
    miles = "miles"
  };

  if (filterSettings.doesDelivery && filterSettings.doesPickup) {
    availabilityMessage = `Showing vendors that deliver to your current address and offer pickup within ${filterSettings.pickupRadius} ${miles}`;
  } else if (filterSettings.doesPickup && !filterSettings.doesDelivery) {
    availabilityMessage = `Showing only vendors that offer pickup within ${filterSettings.pickupRadius} ${miles} of your address`;
  } else if (filterSettings.doesDelivery && !filterSettings.doesPickup) {
    availabilityMessage = `Showing only vendors that deliver to your current address`;
  } else {
    availabilityMessage = `No vendors will be displayed unless you select either delivery or pickup`;
  };

  function classNameResolve(filterSetting) {
    if (filterSetting) {
      return s.icon_active;
    }

    return s.icon_inactive;
  }

  return (
    <div>
        <div className={s.filter_settings}>
          <div className={s.explainer}>To adjust search settings, (un)select options below</div>
          <div className={s.close} onClick={e => props.onClose(filterSettings)}>
            <FontAwesomeIcon
              icon={faTimes}
              size="lg"
              color="white"
              pull="right"
            />
          </div>

          <div className={s.settings}>
            <div className={s.availability}>
              <div className={s.title}>Delivery and Pickup Filters</div>
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
                <div>
                  <input
                    className={s.radius}
                    value={filterSettings.pickupRadius}
                    type="number"
                  />
                </div>
              </div>
              <div className={s.setting_message}>
                {availabilityMessage}
              </div>
            </div>

            <div className={s.ordering}>
              <div className={s.title}>Availability and Price Filters</div>
              <div className={s.ordering_settings}>
                <div
                  className={classNameResolve(
                    filterSettings.availableTodayOnly,
                  )}
                >
                  <div className={s.text_icon}>Available Today</div>
                </div>
                <div className={classNameResolve(filterSettings.onDemandOnly)}>
                  On-Demand
                </div>
                <div>{filterSettings.lowPrice.toString()}</div>
                <div>{filterSettings.highPrice.toString()}</div>
              </div>
            </div>



            <div className={s.cocktails}>
              <div className={s.title}>Cocktail Filters</div>
              <div className={s.cocktails_settings}>
                <div
                  className={classNameResolve(filterSettings.showBoozy)}
                  onClick={e =>
                    setFilterSettings({ showBoozy: !filterSettings.showBoozy })
                  }
                >
                  <FontAwesomeIcon icon={faGlassWhiskey} size="3x" />
                </div>
                <div
                  className={classNameResolve(filterSettings.showStrong)}
                  onClick={e =>
                    setFilterSettings({ showStrong: !filterSettings.showStrong })
                  }
                >
                  <FontAwesomeIcon icon={faCocktail} size="3x" />
                </div>
                <div
                  className={classNameResolve(filterSettings.showLong)}
                  onClick={e =>
                    setFilterSettings({ showLong: !filterSettings.showLong })
                  }
                >
                  <FontAwesomeIcon icon={faWineGlass} size="3x" />
                </div>
                <div
                  className={classNameResolve(filterSettings.showLow)}
                  onClick={e =>
                    setFilterSettings({ showLow: !filterSettings.showLow })
                  }
                >
                  <FontAwesomeIcon icon={faWineBottle} size="3x" />
                </div>
              </div>
              <div className={s.setting_message}>
                Show boozy (e.g. Old Fashioned), strong (e.g. Margarita), long (e.g. Moscow Mule) and low ABV cocktails
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default withStyles(s)(FilterSettings);
