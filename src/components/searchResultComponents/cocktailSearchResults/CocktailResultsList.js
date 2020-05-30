import React, { useState, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './CocktailResultsList.scss';
import CocktailListItem from './CocktailListItem';
import ApplicationContext from '../../ApplicationContext';

const SEARCH_COCKTAILS = `
  query SearchCocktails($doesDelivery: Boolean, $doesPickup: Boolean, $userLongitude: Float, $userLatitude: Float, $pickupRadius: Float) {
    searchVendors(parameters: {doesDelivery: $doesDelivery, doesPickup: $doesPickup, userLongitude: $userLongitude, userLatitude: $userLatitude, pickupRadius: $pickupRadius}) {
      slug
      dbaName
      doesDelivery
      doesPickup
      cocktails {
        name
        ingredients
        price
        servingSize
        profile
        description
        image
      }
      Availabilities {
        availabilityType
      }
    }
  }
`;

function CocktailSearchResults(props) {
  const customerLocation = useContext(ApplicationContext);

  const [userLatitude, setUserLatitude] = useState(
    customerLocation.context.userLatitude,
  );
  const [userLongitude, setUserLongitude] = useState(
    customerLocation.context.userLongitude,
  );

  const [cocktailsDisplayed, setCocktailsDisplayed] = useState(0);

  const { loading, error, data } = useQuery(SEARCH_COCKTAILS, {
    variables: {
      userLatitude,
      userLongitude,
      doesDelivery: props.filterSettings.doesDelivery,
      doesPickup: props.filterSettings.doesPickup,
      pickupRadius: parseFloat(props.filterSettings.pickupRadius),
    },
  });
  let searchResults;

  if (loading) return <div>Searching...</div>;
  if (error) return <div>Something abd happened...</div>;
  if (data) searchResults = data.searchVendors;

  let displayCounter = 0;

  function incrementDisplayCounter() {
    displayCounter += 1;
    console.log(displayCounter);
  }

  function ResultsMessage(resultsArray) {
    let miles;
    let cocktails;
    let totalCocktails = 0;
    resultsArray.forEach(vendor => {
      vendor.cocktails.forEach(cocktail => {
        totalCocktails++;
      });
    });

    if (props.filterSettings.pickupRadius === 1) {
      miles = 'mile';
    } else {
      miles = 'miles';
    }

    if (resultsArray.length === 1) {
      cocktails = 'cocktail';
    } else {
      cocktails = 'cocktails';
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
          Showing {cocktailsDisplayed} out of {totalCocktails} {cocktails}{' '}
          available for delivery to your current address or pickup within{' '}
          {props.filterSettings.pickupRadius.toString()} {miles}
        </div>
      </div>
    );
  }

  let availableVendors;
  let onlineOrdering;
  if (searchResults) {
    availableVendors = searchResults;
  }

  const displayCocktails = [];
  if (props.filterSettings.showStiff) displayCocktails.push('stiff');
  if (props.filterSettings.showStrong) displayCocktails.push('strong');
  if (props.filterSettings.showLong) displayCocktails.push('long');
  if (props.filterSettings.showLow) displayCocktails.push('lowABV');

  return (
    <div className={s.result_list}>
      {availableVendors && ResultsMessage(availableVendors)}
      {availableVendors &&
        availableVendors.map((vendor, index, matchingVendors) => {
          console.log(vendor);
          return vendor.cocktails.map((cocktail, index, cocktails) => {
            if (vendor.onlineStore === '') {
              onlineOrdering = 'No Online Store';
            } else {
              onlineOrdering = 'Order Online';
            }
            if (displayCocktails.includes(cocktail.profile)) {
              incrementDisplayCounter();
              return (
                <CocktailListItem
                  vendor={vendor}
                  cocktail={cocktail}
                  index={index}
                  displayCocktails={displayCocktails}
                />
              );
            }
          });
        })}
    </div>
  );
}

export default withStyles(s)(CocktailSearchResults);
