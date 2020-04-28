import React, { useState, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './searchResultDisplay.scss';
import FilterSettings from "../filterSettings/FilterSettings";
import VendorSearchResults from '../vendorSearchResults/vendorSearchResults';
import CocktailSearchResults from '../cocktailSearchResults/CocktailSearchResults';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import Button from '../../sitewideDisplayComponents/Button/Button';
import Link from '../../utilityComponents/link/Link';
import ApplicationContext from '../../ApplicationContext';

const SEARCH_RESULTS_QUERY = `
  query SearchVendors(
    $userLatitude: Float!,
    $userLongitude: Float!)
  {
    searchVendors(
      latLng:{
        userLatitude: $userLatitude,
        userLongitude: $userLongitude
      })
      {
        id
        dbaName
        physicalStreetAddress
        physicalCity
        physicalState
        doesDelivery
        doesPickup
        deliveryRadius
        vendorImage
        onlineStore
        cocktails {
          id
          name
          ingredients
          image
        }
      }
  }
`;

function SearchResultsDisplay() {
  const userLocation = useContext(ApplicationContext);

  const [displaySetting, setDisplaySetting] = useState('vendors');
  const [filterSettings, setFilterSettings] = useState({
    doesDelivery: true,
    doesPickup: true,
    pickupRadius: 1,
  });
  const [userLatitude, setUserLatitude] = useState(
    userLocation.context.userLatitude,
  );
  const [userLongitude, setUserLongitude] = useState(
    userLocation.context.userLongitude,
  );
  const [filterSettingsOpen, setFilterSettingsOpen] = useState(false);
  let vendorStyle;
  let cocktailStyle;
  let vendorButton;
  let cocktailButton;
  let resultsDisplay;

  const { loading, error, data } = useQuery(SEARCH_RESULTS_QUERY, {
    variables: { userLatitude, userLongitude },
  });
  let searchResults;
  if (data) {
    searchResults = data.searchVendors;
  }

  if (displaySetting === 'vendors') {
    vendorStyle = s.active;
    vendorButton = 'Showing Vendors';
    resultsDisplay = <VendorSearchResults results={searchResults} filterSettings={filterSettings} />;
  } else {
    vendorStyle = s.inactive;
    vendorButton = 'Show Vendors';
  }

  if (displaySetting === 'cocktails') {
    cocktailStyle = s.active;
    cocktailButton = 'Showing Cocktails';
    resultsDisplay = <CocktailSearchResults results={searchResults} filterSettings={filterSettings} />;
  } else {
    cocktailStyle = s.inactive;
    cocktailButton = 'Show Cocktails';
  }

  function changeSettings(newSettings) {
    console.log(newSettings);
  };

  return (
    <div className={s.search_result_content}>
      <FilterSettings isOpen={filterSettingsOpen} close={e => changeSettings()}  />
      <div className={s.search_result_list_display}>
        <div className={s.display_selectors}>
          <FontAwesomeIcon icon={faSlidersH} className={s.filter_icon} size="2x" color="grey" onClick={e => setFilterSettingsOpen(true)} />

          <div
            className={vendorStyle}
            onClick={e => setDisplaySetting('vendors')}
          >
            {vendorButton}
          </div>
          <div
            className={cocktailStyle}
            onClick={e => setDisplaySetting('cocktails')}
          >
            {cocktailButton}
          </div>
        </div>

        <div className={s.list}>{resultsDisplay}</div>
      </div>
    </div>
  );
}

export default withStyles(s)(SearchResultsDisplay);
