import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './searchResultDisplay.scss';
import { useQuery } from "graphql-hooks";
import SearchResultList from '../vendorSearchResults/vendorSearchResults';
import CocktailSearchResults from '../cocktailSearchResults/CocktailSearchResults';
import Button from '../../sitewideDisplayComponents/Button/Button';
import Link from '../../utilityComponents/link/Link';

const searchResults = `
  query getSearchResults() {
    searchVendors();
  }
`;

class SearchResultDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySetting: 'vendors',
      filterSettings: {
        doesDelivery: true,
        doespickup: true,
        pickupRadius: 1,
      },
    };
    this.changeDisplayToVendors = this.changeDisplayToVendors.bind(this);
    this.changeDisplayToCocktails = this.changeDisplayToCocktails.bind(this);
  }

  changeDisplayToVendors() {
    if (this.state.displaySetting == 'cocktails') {
      this.setState({
        displaySetting: 'vendors',
      });
    }
  }

  changeDisplayToCocktails() {
    if (this.state.displaySetting == 'vendors') {
      this.setState({
        displaySetting: 'cocktails',
      });
    }
  }

  render() {
    let vendorStyle;
    let cocktailStyle;
    let vendorContent;
    let cocktailContent;
    let resultsDisplay;

    if (this.state.displaySetting == 'vendors') {
      vendorStyle = s.active;
      vendorContent = 'Showing Vendors';
      resultsDisplay = <SearchResultList />
    } else {
      vendorStyle = s.inactive;
      vendorContent = 'Show Vendors';
    }

    if (this.state.displaySetting === 'cocktails') {
      cocktailStyle = s.active;
      cocktailContent = 'Showing Cocktails';
      resultsDisplay = <CocktailSearchResults />
    } else {
      cocktailStyle = s.inactive;
      cocktailContent = 'Show Cocktails';
    }

    return (
      <div className={s.search_result_content}>
        <div className={s.search_result_list_display}>
          <div className={s.display_selectors}>
            <div className={vendorStyle} onClick={this.changeDisplayToVendors}>
              {vendorContent}
            </div>
            <div className={cocktailStyle} onClick={this.changeDisplayToCocktails}>
              {cocktailContent}
            </div>
          </div>

          <div className={s.list}>
            {resultsDisplay}
          </div>

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
}

export default withStyles(s)(SearchResultDisplay);
