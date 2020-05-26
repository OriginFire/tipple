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
  faChevronCircleLeft,
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
        <div className={s.settings}>
          <div className={s.cocktails}>
            <div className={s.title}>Cocktails To Show</div>
            <div className={s.cocktails_settings}>
              <div>
                <div className={s.cocktail_button_label}>Stiff</div>
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
                <div className={s.button_explainer}>e.g. Old Fashioned</div>
              </div>

              <div>
                <div className={s.cocktail_button_label}>Strong</div>
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
                <div className={s.button_explainer}>e.g. Margarita</div>
              </div>

              <div>
                <div className={s.cocktail_button_label}>Long</div>
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
                <div className={s.button_explainer}>e.g. Mojito</div>
              </div>

              <div>
                <div className={s.cocktail_button_label}>Low ABV</div>
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
                <div className={s.button_explainer}>e.g. Spritzer</div>
              </div>

            </div>
            <div className={s.cocktails_tooltip}>How do I use this filter setting?
              <div className={s.setting_explainer}>Select the cocktail types you WANT to appear in your search results. If you unselect a cocktail type, the app will block matching drinks from appearing in search results. For instance, un-selecting "Stiff" would remove all Old Fashioneds and any other all-or-mostly liquor drinks from the results.
                <br />
                <br />
                This is useful if you're looking for drinks matching a specific profile ("I want something like a Margarita," etc). If you're just browsing, it's suggested you leave all drink types selected.
                <br />
                <br />
                 NOTE: The filter only applies when you are viewing the list of individual cocktails sold by all nearby vendors.
              </div>
            </div>
          </div>

          <div className={s.fulfillment}>
            <div className={s.title}>Fulfillment Settings</div>
            <div className={s.fulfillment_settings}>
              <div>
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
                <div className={s.button_explainer}>Delivery</div>
              </div>

              <div>
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
                <div className={s.button_explainer}>Pickup</div>
              </div>

              <div>{inputField()}</div>
            </div>
            <div className={s.setting_status}>{orderingMessage}</div>
            <div className={s.fulfillment_tooltip}>How do I use this filter setting?
              <div className={s.setting_explainer}>Select the order fulfillment methods (Delivery and/or Pickup) that you WANT to appear in your search results. You must select at least one.
                <br />
                <br />
                If Delivery is selected, all cocktails available for delivery to your current address will be listed in cocktail results and all vendors that deliver to your current address will be listed in vendor results.
                <br />
                <br />
                If Pickup is selected, you must also provide the distance from your current address (default 1 mile) in which to display matches. As with Delivery, the search will return individual cocktails / vendors available within the specified distance from your address.
              </div>
            </div>
          </div>

          <div className={s.availability}>
            <div className={s.title}>Price and Availability Filters</div>
            <div className={s.availability_settings}>

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

              <div
                className={classNameResolve(filterSettings.availableTodayOnly)}
                onClick={e =>
                  setFilterSettings({
                    ...filterSettings,
                    availableTodayOnly: !filterSettings.availableTodayOnly,
                  })
                }
              >
                <div className={s.text_icon}>Available Today Only</div>
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
                On-Demand Only
              </div>
            </div>
            <div className={s.setting_status}>{availabilityMessage}</div>
            <div className={s.availability_tooltip}>How do I use this filter setting?
              <div className={s.setting_explainer}>
                This setting allows you to refine your search in two ways. First, you can set a price limit to display only cocktails, or vendors with at least one cocktail, below the specified price.
                <br />
                <br />
                Second, using availability filters, you can opt to limit results only to the offerings Available Today and/or On-Demand. Vendors have different days/hours of operation, as well as differing delays when fulfilling orders. Using availability filters, you can see what is more immediately available.
                <br />
                <br />
                The availability filters do not discern between delivery or pickup fulfillment. If you want to narrow your search, for example, to on-demand delivery options only, you would need to select the appropriate Availability AND Fulfillment filters.
              </div>
            </div>
          </div>
        </div>

        <div className={s.close} onClick={e => props.onClose(filterSettings)}>
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            size="lg"
            style={{padding: "0 15px"}}
          />
          Apply changes and return to search
        </div>

      </div>
    </div>
  );
}

export default withStyles(s)(FilterSettings);
