import React, { useContext, useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faCocktail,
  faGlassWhiskey,
  faShareSquare,
  faStore,
  faWineBottle,
  faWineGlass,
} from '@fortawesome/free-solid-svg-icons';
import SearchContext from '../SearchContext';
import s from './FilterSettings.scss';

function FilterSettings(props) {
  const searchContext = useContext(SearchContext);
  const [filterSettings, setFilterSettings] = useState(
    searchContext.searchFilters,
  );

  let miles;
  if (filterSettings.pickupRadius === 1) {
    miles = 'mile';
  } else {
    miles = 'miles';
  }

  let cocktailsMessage;
  if (
    filterSettings.showStiff &&
    filterSettings.showStrong &&
    filterSettings.showLong &&
    filterSettings.showLow
  ) {
    cocktailsMessage = 'Showing all types of cocktails in search results';
  } else if (
    !filterSettings.showStiff &&
    !filterSettings.showStrong &&
    !filterSettings.showLong &&
    !filterSettings.showLow
  ) {
    cocktailsMessage =
      'You must select at least one type of cocktail to display in your search results';
  } else {
    cocktailsMessage = 'Only showing cocktails of the type(s) selected above';
  }

  let fulfillmentMessage;
  if (filterSettings.doesDelivery && filterSettings.doesPickup) {
    fulfillmentMessage = `Showing vendors that deliver to your current address or offer pickup within ${filterSettings.pickupRadius} ${miles}`;
  } else if (filterSettings.doesPickup && !filterSettings.doesDelivery) {
    fulfillmentMessage = `Showing only vendors that offer pickup within ${filterSettings.pickupRadius} ${miles} of your address`;
  } else if (filterSettings.doesDelivery && !filterSettings.doesPickup) {
    fulfillmentMessage = `Showing only vendors that deliver to your current address`;
  } else {
    fulfillmentMessage = `No vendors will be displayed unless you select either delivery or pickup`;
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

  function saveChanges() {
    searchContext.searchFilters = {...filterSettings};
    props.onClose();
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
                  className={classNameResolve(filterSettings.showStiff)}
                  onClick={e =>
                    setFilterSettings({
                      ...searchContext.searchFilters,
                      showStiff: !filterSettings.showStiff,
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
            <div className={s.setting_status}>{cocktailsMessage}</div>
            <div className={s.cocktails_tooltip}>
              How do I use this filter setting?
              <div className={s.setting_explainer}>
                This setting filters cocktails in the individual cocktail list
                based on how prominent the alcoholic ingredients are, which
                loosely corresponds to alcohol by volume.
                <br />
                <br />
                Select the cocktail types you WANT to appear in your search
                results. If you unselect a cocktail type, matching drinks will
                be blocked from your search results. For instance, un-selecting
                "Stiff" would remove all Old Fashioneds and any other
                all-or-mostly liquor drinks from your results. This is useful if
                you're browsing for drinks and have a specific booziness in mind
                ("I want a Margarita or something like it," etc).
                <br />
                <br />
                <span className={s.tooltip_note}>
                  If you're browsing with no preference for booziness or are
                  unsure what type of drinks are right for you, it's suggested
                  you leave all drink types selected.
                </span>
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
            <div className={s.setting_status}>{fulfillmentMessage}</div>
            <div className={s.fulfillment_tooltip}>
              How do I use this filter setting?
              <div className={s.setting_explainer}>
                Select the order fulfillment methods (Delivery and/or Pickup)
                that you WANT to appear in your search results. You must select
                at least one.
                <br />
                <br />
                If Delivery is selected, all cocktails available for delivery to
                your current address will be listed in cocktail results and all
                vendors that deliver to your current address will be listed in
                vendor results.
                <br />
                <br />
                If Pickup is selected, you must also provide the distance from
                your current address (default 1 mile) in which to display
                matches. As with Delivery, the search will return individual
                cocktails / vendors available within the specified distance from
                your address.
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
            <div className={s.availability_tooltip}>
              How do I use this filter setting?
              <div className={s.setting_explainer}>
                This setting allows you to refine your search in two ways.
                First, you can set a price limit to display only cocktails, or
                vendors with at least one cocktail, below the specified price.
                <br />
                <br />
                Second, using availability filters, you can opt to limit results
                only to the offerings Available Today and/or On-Demand. Vendors
                have different days/hours of operation, as well as differing
                delays when fulfilling orders. Using availability filters, you
                can see what is more immediately available.
                <br />
                <br />
                The availability filters do not discern between delivery or
                pickup fulfillment. If you want to narrow your search, for
                example, to on-demand options and only from vendors that
                deliver, you would need to select the appropriate Availability
                AND Fulfillment filters.
              </div>
            </div>
          </div>
        </div>

        <div className={s.close} onClick={e => saveChanges()}>
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            size="lg"
            style={{ padding: '0 15px' }}
          />
          Apply changes and return to search
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(FilterSettings);
