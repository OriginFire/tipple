import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './CocktailSearchResults.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import history from '../../../history';

function CocktailSearchResults(props) {
  function resultsMessage(resultsArray) {
    let miles;
    let cocktails;
    let totalCocktails = 0;
    resultsArray.forEach(vendor => {
      vendor.cocktails.forEach(cocktail => {
        totalCocktails++;
      })
    })

    if (props.filterSettings.pickupRadius === 1) {
      miles = 'mile';
    } else {
      miles = 'miles';
    }

    if (resultsArray.length) {
      cocktails = 'cocktails are';
    } else {
      cocktails = 'cocktail is';
    }

    if (totalCocktails === 0) {
      return (
        <div className={s.results_message}>
          <div>
            There are no cocktails available for delivery to your current
            address, however nearby vendors may sell cocktails for pickup.
          </div>
          <br />
          <div>
            We checked for cocktails available for pickup within{` `}
            {props.filterSettings.pickupRadius.toString()} {miles} and found
            none, but you can adjust the search settings.
          </div>
        </div>
      );
    }
    return (
      <div className={s.results_message}>
        <div style={{}}>
          {totalCocktails} {cocktails} available for delivery to your
          current address or pickup within {props.filterSettings.pickupRadius.toString()} {miles}
        </div>
      </div>
    );
  };

  let availableVendors;
  let onlineOrdering;
  if (props.results) {
    availableVendors = props.results;
  }
  return (
    <div className={s.result_list}>
      {resultsMessage(availableVendors)}
      {availableVendors.map((vendor, index, matchingVendors) => {
        let availability;
        if (vendor.doesDelivery && vendor.doesPickup) {
          availability = 'Delivery or Pickup';
        } else if (vendor.doesDelivery && !vendor.doesPickup) {
          availability = 'Delivery Only';
        } else {
          availability = 'Pickup Only';
        };
        return vendor.cocktails.map((cocktail, index, cocktails) => {
          if (vendor.onlineStore === '') {
            onlineOrdering = 'No Online Store';
          } else {
            onlineOrdering = 'Order Online';
          }
          return (
            <div
              className={s.list_item}
              onClick={e => history.push(`/vendor/${vendor.slug}`)}
            >
              <div>
                <img className={s.cocktail_image} src={`data:image/jpg;base64,${cocktail.image}`} />
                <div className={s.vendor_name}>Sold by {vendor.dbaName}</div>
                <div className={s.availability}>Available Today</div>
              </div>

              <div className={s.result_text}>
                <div className={s.cocktail_name}>{cocktail.name}</div>
                <div className={s.price}>$8 / 3.5 oz serving</div>
                <div className={s.ingredients}>{cocktail.ingredients}</div>
                <div className={s.expand}>
                  More Details{` `}
                  <FontAwesomeIcon icon={faChevronDown} size="xs" />
                </div>
              </div>
            </div>
          );
        });
      })}
    </div>
  );
}

export default withStyles(s)(CocktailSearchResults);
