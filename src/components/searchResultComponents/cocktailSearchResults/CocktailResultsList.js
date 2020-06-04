import React, { useState, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './CocktailResultsList.scss';
import CocktailListItem from './CocktailListItem';
import ResultsMessage from './ResultsMessage';
import ApplicationContext from '../../ApplicationContext';
import SearchContext from '../SearchContext';
import db from '../../../data/dbSimulator/Vendors';

const SEARCH_COCKTAILS = `
  query SearchCocktails(
  $doesDelivery: Boolean,
  $doesPickup: Boolean,
  $userLongitude: Float,
  $userLatitude: Float,
  $pickupRadius: Float) {
    searchVendors(parameters: {
    doesDelivery: $doesDelivery,
    doesPickup: $doesPickup,
    userLongitude: $userLongitude,
    userLatitude: $userLatitude,
    pickupRadius: $pickupRadius}) {
      slug
      dbaName
      doesDelivery
      minimumDeliveryFulfillment
      doesPickup
      minimumPickupFulfillment
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
  const searchContext = useContext(SearchContext);
  const [filterSettings, setFilterSettings] = useState(
    searchContext.searchFilters,
  );
  console.log(
    searchContext.searchFilters,
    'context list',
    filterSettings,
    'state list',
  );
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
      doesDelivery: filterSettings.doesDelivery,
      doesPickup: filterSettings.doesPickup,
      pickupRadius: parseFloat(filterSettings.pickupRadius),
    },
  });
  let searchResults;

  if (loading) return <div>Searching...</div>;
  if (error) return <div>Something abd happened...</div>;
  if (data) searchResults = data.searchVendors;

  let displayCounter = 0;

  function incrementDisplayCounter() {
    displayCounter += 1;
  }

  let availableVendors;
  if (searchResults) {
    availableVendors = searchResults;
  }

  const displayCocktails = [];
  if (filterSettings.showStiff) displayCocktails.push('stiff');
  if (filterSettings.showStrong) displayCocktails.push('strong');
  if (filterSettings.showLong) displayCocktails.push('long');
  if (filterSettings.showLow) displayCocktails.push('lowABV');

  return (
    <div className={s.result_list}>
      {availableVendors && (
        <ResultsMessage
          resultsArray={availableVendors}
          cocktailsDisplayed={cocktailsDisplayed}
          displayCounter={displayCounter}
        />
      )}
      {availableVendors &&
        availableVendors.map((vendor, index, matchingVendors) => {
          let onDemandCheck = true;
          if (filterSettings.onDemandOnly) {
            if (vendor.minimumDeliveryFulfillment !== 0 && vendor.minimumPickupFilfillment !== 0) {
              onDemandCheck = false;
            } else if (!filterSettings.doesDelivery && (vendor.minimumPickupFilfillment !== 0)) {
              onDemandCheck = false;
            } else if (!filterSettings.doesPickup && (vendor.minimumDeliveryFulfillment !== 0)) {
              onDemandCheck = false;
            }
          }
          if (onDemandCheck) {
            return vendor.cocktails.map((cocktail, index, cocktails) => {
              let availability;
              db.map(dbVendor => {
                if (dbVendor.dbaName === vendor.dbaName) {
                  availability = dbVendor.availability;
                }
              });
              if (displayCocktails.includes(cocktail.profile)) {
                incrementDisplayCounter();
                return (
                  <CocktailListItem
                    vendor={vendor}
                    cocktail={cocktail}
                    index={index} //what do we substitute in place of map index?
                    displayCocktails={displayCocktails}
                    availability={availability}
                  />
                );
              }
            });
          }
        })}
    </div>
  );
}

export default withStyles(s)(CocktailSearchResults);
