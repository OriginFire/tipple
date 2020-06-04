import React, { useState, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import SearchContext from '../SearchContext';
import s from './CocktailResultsList.scss';

function ResultsMessage(props) {
  const { resultsArray } = props;
  const { cocktailsDisplayed } = props;
  const { displayCounter } = props;
  const searchContext = useContext(SearchContext);
  const [filterSettings, setFilterSettings] = useState(
    searchContext.searchFilters,
  );

  let miles;
  let cocktails;
  let totalCocktails = 0;
  resultsArray.forEach(vendor => {
    vendor.cocktails.forEach(cocktail => {
      totalCocktails++;
    });
  });

  if (filterSettings.pickupRadius === 1) {
    miles = 'mile';
  } else {
    miles = 'miles';
  }

  if (totalCocktails === 1) {
    cocktails = 'cocktail';
  } else {
    cocktails = 'cocktails';
  }

  if (filterSettings.doesPickup && filterSettings.doesDelivery) {
    if (totalCocktails === 0) {
      return (
        <div className={s.results_message}>
          <div>
            There are no cocktails available for delivery to your current
            address, however nearby vendors may sell cocktails for pickup.
          </div>
          <br />
          {filterSettings.doesDelivery && filterSettings.doesPickup && (
            <div>
              We checked for cocktails available for pickup within{` `}
              {filterSettings.pickupRadius.toString()} {miles} and found none,
              but you can adjust the search settings.
            </div>
          )}
        </div>
      );
    }
    return (
      <div className={s.results_message}>
        <div style={{}}>
          Showing {cocktailsDisplayed} out of {totalCocktails} {cocktails}{' '}
          available for delivery to your current address or pickup within{' '}
          {filterSettings.pickupRadius.toString()} {miles}
        </div>
      </div>
    );
  }

  if (filterSettings.doesPickup && !filterSettings.doesDelivery) {
    if (totalCocktails === 0) {
      return (
        <div className={s.results_message}>
          <div>
            There are no cocktails available for pickup within{' '}
            {filterSettings.pickupRadius.toString()} {miles}{' '}of your current
            address.
            <br />
            <br />
            Consider increasing the pickup radius you have selected in the
            search settings.
          </div>
        </div>
      );
    }
    return (
      <div className={s.results_message}>
        <div style={{}}>
          Showing {cocktailsDisplayed} out of {totalCocktails} {cocktails}{' '}
          availabile for pickup within {filterSettings.pickupRadius.toString()}{' '}
          {miles}{' '}of your current address
        </div>
      </div>
    );
  }

  if (!filterSettings.doesPickup && filterSettings.doesDelivery) {
    if (totalCocktails === 0) {
      return (
        <div className={s.results_message}>
          <div>
            We checked vendors in your area, but found none who deliver
            cocktails to your current address.
          </div>
          <br />
          <div>
            Consider changing your search settings to see cocktails available
            for pickup.
          </div>
        </div>
      );
    }
    return (
      <div className={s.results_message}>
        <div style={{}}>
          Showing {cocktailsDisplayed} out of {totalCocktails} {cocktails}{' '}
          available for delivery to your current address
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ResultsMessage);
