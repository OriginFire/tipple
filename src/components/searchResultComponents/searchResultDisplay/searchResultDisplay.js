import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './searchResultDisplay.scss';
import SearchResultList from '../searchResultList/searchResultList';
import CocktailSearchResults from '../cocktailSearchResults/CocktailSearchResults';
import Button from '../../sitewideDisplayComponents/Button/Button';
import Link from '../../utilityComponents/link/Link';

class SearchResultDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displaySetting: 'vendors' };
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
    let explainerContent;
    let resultsDisplay;

    if (this.state.displaySetting == 'vendors') {
      vendorStyle = s.active;
      vendorContent = 'Showing Vendors';
      explainerContent = 'These are vendors in your area selling cocktails for delivery or pickup';
      resultsDisplay = <SearchResultList />
    } else {
      vendorStyle = s.inactive;
      vendorContent = 'Show Vendors';
    }

    if (this.state.displaySetting === 'cocktails') {
      cocktailStyle = s.active;
      cocktailContent = 'Showing Cocktails';
      explainerContent = 'These are cocktails that vendors in your area are selling for delivery or pickup';
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

          <h2 className={s.result_explainer}>
            {explainerContent}
          </h2>

          <div className={s.list}>
            {resultsDisplay}
          </div>
          <div className={s.buttons}>
            <Link to="/">
              <Button type="Secondary" text="Return Home" />
            </Link>

            <Link to="/partner">
              <Button type="Primary" text="Add A Bar" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SearchResultDisplay);
