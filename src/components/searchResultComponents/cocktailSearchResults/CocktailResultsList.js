import React, { useState, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './CocktailResultsList.scss';
import CocktailListItem from './CocktailListItem';
import ApplicationContext from '../../ApplicationContext';

const SEARCH_COCKTAILS = `
  query SearchCocktails($userLongitude: Float, $userLatitude: Float) {
    searchVendors(latLng: {userLongitude: $userLongitude, userLatitude: $userLatitude}) {
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
  const { loading, error, data } = useQuery(SEARCH_COCKTAILS, {
    variables: { userLatitude, userLongitude },
  });
  let searchResults;

  if (loading) return <div>Searching...</div>;
  if (error) return <div>Something abd happened...</div>;
  if (data) searchResults = data.searchVendors;

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
          {totalCocktails} {cocktails} available for delivery to your current
          address or pickup within{' '}
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
  return (
    <div className={s.result_list}>
      {availableVendors && ResultsMessage(availableVendors)}
      {availableVendors &&
        availableVendors.map((vendor, index, matchingVendors) => {
          let availability;
          if (vendor.doesDelivery && vendor.doesPickup) {
            availability = 'Delivery or Pickup';
          } else if (vendor.doesDelivery && !vendor.doesPickup) {
            availability = 'Delivery Only';
          } else {
            availability = 'Pickup Only';
          }
          return vendor.cocktails.map((cocktail, index, cocktails) => {
            if (vendor.onlineStore === '') {
              onlineOrdering = 'No Online Store';
            } else {
              onlineOrdering = 'Order Online';
            }
            return (
              <CocktailListItem
                vendor={vendor}
                cocktail={cocktail}
                index={index}
              />
            );
          });
        })}
    </div>
  );
}

export default withStyles(s)(CocktailSearchResults);
