import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './searchResultDisplay.scss';
import SearchResultList from '../vendorSearchResults/vendorSearchResults';
import CocktailSearchResults from '../cocktailSearchResults/CocktailSearchResults';
import Button from '../../sitewideDisplayComponents/Button/Button';
import Link from '../../utilityComponents/link/Link';

const SEARCH_RESULTS_QUERY = `
  query getSearchResults() {
    searchVendors();
  }
`;

function SearchResultsDisplay() {
  const [displaySetting, setDisplaySetting] = useState('vendors');
  const [doesDelivery, setDoesDelivery] = useState(true);
  const [doesPickup, setDoesPickup] = useState(true);
  const [pickupRadius, setPickupRadius] = useState(1);
  let vendorStyle;
  let cocktailStyle;
  let vendorContent;
  let cocktailContent;
  let resultsDisplay;

  if (displaySetting === 'vendors') {
    vendorStyle = s.active;
    vendorContent = 'Showing Vendors';
    resultsDisplay = <SearchResultList />;
  } else {
    vendorStyle = s.inactive;
    vendorContent = 'Show Vendors';
  }

  if (displaySetting === 'cocktails') {
    cocktailStyle = s.active;
    cocktailContent = 'Showing Cocktails';
    resultsDisplay = <CocktailSearchResults />;
  } else {
    cocktailStyle = s.inactive;
    cocktailContent = 'Show Cocktails';
  }

  return (
    <div className={s.search_result_content}>
      <div className={s.search_result_list_display}>
        <div className={s.display_selectors}>
          <div
            className={vendorStyle}
            onClick={e => setDisplaySetting('vendors')}
          >
            {vendorContent}
          </div>
          <div
            className={cocktailStyle}
            onClick={e => setDisplaySetting('cocktails')}
          >
            {cocktailContent}
          </div>
        </div>

        <div className={s.list}>{resultsDisplay}</div>

        <div className={s.buttons}>
          <Link to="/">
            <Button type="Secondary" text="Return Home" />
          </Link>

          <Button type="Primary" text="Adjust Filter Settings" />
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(SearchResultsDisplay);
