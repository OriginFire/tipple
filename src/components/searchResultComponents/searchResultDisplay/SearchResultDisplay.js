import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import s from './SearchResultDisplay.scss';
import FilterSettings from '../filterSettings/FilterSettings';
import VendorResultsList from '../vendorSearchResults/VendorResultsList';
import CocktailResultsList from '../cocktailSearchResults/CocktailResultsList';

function SearchResultsDisplay() {
  const [displaySetting, setDisplaySetting] = useState('cocktails');
  const [filterSettings, setFilterSettings] = useState({
    doesDelivery: true,
    doesPickup: true,
    pickupRadius: 1,
    showBoozy: true,
    showStrong: true,
    showLong: true,
    showLow: true,
    availableTodayOnly: false,
    onDemandOnly: false,
    highPrice: null,
  });
  const [filterSettingsOpen, setFilterSettingsOpen] = useState(false);
  let vendorStyle;
  let cocktailStyle;
  let vendorButton;
  let cocktailButton;
  let resultsDisplay;

  if (displaySetting === 'vendors') {
    vendorStyle = s.active;
    vendorButton = 'Showing Vendors';
    resultsDisplay = <VendorResultsList filterSettings={filterSettings} />;
  } else {
    vendorStyle = s.inactive;
    vendorButton = 'Show Vendors';
  }

  if (displaySetting === 'cocktails') {
    cocktailStyle = s.active;
    cocktailButton = 'Showing Cocktails';
    resultsDisplay = <CocktailResultsList filterSettings={filterSettings} />;
  } else {
    cocktailStyle = s.inactive;
    cocktailButton = 'Show Cocktails';
  }

  function updateFilterSettings(newSettings) {
    setFilterSettingsOpen(false);
    setFilterSettings(newSettings);
    console.log(newSettings);
  }

  return (
    <div className={s.search_result_content}>
      {filterSettingsOpen && (
        <FilterSettings
          settings={filterSettings}
          onClose={newSettings => updateFilterSettings(newSettings)}
        />
      )}
      <div className={s.search_result_list_display}>
        <div className={s.display_selectors}>
          <FontAwesomeIcon
            icon={faSlidersH}
            className={s.filter_icon}
            size="2x"
            color="grey"
            onClick={e => setFilterSettingsOpen(true)}
          />

          <div
            className={cocktailStyle}
            onClick={e => setDisplaySetting('cocktails')}
          >
            {cocktailButton}
          </div>

          <div
            className={vendorStyle}
            onClick={e => setDisplaySetting('vendors')}
          >
            {vendorButton}
          </div>
        </div>

        <div className={s.list}>{resultsDisplay}</div>
      </div>
    </div>
  );
}

export default withStyles(s)(SearchResultsDisplay);
