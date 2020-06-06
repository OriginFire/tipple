import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import s from './SearchResultDisplay.scss';
import ContentBox from '../../sitewideDisplayComponents/contentBox/ContentBox';
import FilterSettings from '../filterSettings/FilterSettings';
import VendorResultsList from '../vendorSearchResults/VendorResultsList';
import CocktailResultsList from '../cocktailSearchResults/CocktailResultsList';

function SearchResultsDisplay() {
  const [displaySetting, setDisplaySetting] = useState('cocktails');
  const [filterSettingsOpen, setFilterSettingsOpen] = useState(false);
  let vendorStyle;
  let cocktailStyle;
  let vendorButton;
  let cocktailButton;
  let resultsDisplay;

  if (displaySetting === 'vendors') {
    vendorStyle = s.active;
    vendorButton = 'Showing Vendors';
    resultsDisplay = <VendorResultsList />;
  } else {
    vendorStyle = s.inactive;
    vendorButton = 'Show Vendors';
  }

  if (displaySetting === 'cocktails') {
    cocktailStyle = s.active;
    cocktailButton = 'Showing Cocktails';
    resultsDisplay = <CocktailResultsList />;
  } else {
    cocktailStyle = s.inactive;
    cocktailButton = 'Show Cocktails';
  }

  return (
    <ContentBox>
      {filterSettingsOpen && (
        <FilterSettings onClose={e => setFilterSettingsOpen(false)} />
      )}
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
    </ContentBox>
  );
}

export default withStyles(s)(SearchResultsDisplay);
