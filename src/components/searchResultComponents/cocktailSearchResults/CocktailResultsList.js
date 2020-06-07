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
        AvailabilitySchedules {
          day
          ScheduleHours {
            hour
          }
        }
      }
    }
  }
`;

function CocktailSearchResults(props) {
  const customerLocation = useContext(ApplicationContext);
  const searchContext = useContext(SearchContext);

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
      doesDelivery: searchContext.searchFilters.doesDelivery,
      doesPickup: searchContext.searchFilters.doesPickup,
      pickupRadius: parseFloat(searchContext.searchFilters.pickupRadius),
    },
  });
  let searchResults;

  if (loading) return <div>Searching...</div>;
  if (error) return <div>Something bad happened...</div>;
  if (data) searchResults = data.searchVendors;

  const displayedVendors = [];
  if (searchResults) {
    searchResults.map((vendor, index, matchingVendors) => {
      let onDemandCheck = true;
      if (searchContext.searchFilters.onDemandOnly) {
        if (
          vendor.minimumDeliveryFulfillment !== 0 &&
          vendor.minimumPickupFulfillment !== 0
        ) {
          onDemandCheck = false;
        } else if (
          !searchContext.searchFilters.doesDelivery &&
          vendor.minimumPickupFulfillment !== 0
        ) {
          onDemandCheck = false;
        } else if (
          !searchContext.searchFilters.doesPickup &&
          vendor.minimumDeliveryFulfillment !== 0
        ) {
          onDemandCheck = false;
        }
      }
      if (onDemandCheck) displayedVendors.push(vendor);
    });
  }

  function CocktailList() {
    let cocktailsDisplayedCounter = 0;
    console.log(displayedVendors);
    return displayedVendors.map(vendor => {
      return vendor.cocktails.map((cocktail, index, cocktails) => {
        let availability;
        const cocktailProfiles = {
          stiff: 'showStiff',
          strong: 'showStrong',
          long: 'showLong',
          lowABV: 'showLow',
        };
        db.map(dbVendor => {
          if (dbVendor.dbaName === vendor.dbaName) {
            availability = dbVendor.availability;
          }
        });
        if (searchContext.searchFilters[cocktailProfiles[cocktail.profile]]) {
          cocktailsDisplayedCounter += 1;
          return (
            <CocktailListItem
              vendor={vendor}
              cocktail={cocktail}
              index={index} // what do we substitute in place of map index?
              availability={availability}
            />
          );
        }
      });
    });
  }

  return (
    <div className={s.result_list}>
      {searchResults && (
        <ResultsMessage
          resultsArray={searchResults}
          cocktailsDisplayed={cocktailsDisplayed}
        />
      )}
      {searchResults && CocktailList()}
    </div>
  );
}

export default withStyles(s)(CocktailSearchResults);
