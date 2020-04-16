import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorAdminDisplay.scss';
import Button from '../../sitewideDisplayComponents/Button';
import Link from '../../utilityComponents/link';
import db from '../../../data/dbSimulator/bars';
import VendorAccountSettings from "../vendorAccountSettings/VendorAccountSettings";
import VendorCocktailSettings from "../vendorCocktailSettings/VendorCocktailSettings";


class VendorAdminDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySetting: 'account',
    };
    this.changeDisplayToAccount = this.changeDisplayToAccount.bind(this);
    this.changeDisplayToCocktails = this.changeDisplayToCocktails.bind(this);
  }

  changeDisplayToAccount() {
    if (this.state.displaySetting === 'cocktails') {
      this.setState( {
        displaySetting: 'account',
      });
    }
}

  changeDisplayToCocktails() {
    if (this.state.displaySetting === 'account') {
      this.setState( {
        displaySetting: 'cocktails',
      });
    }
  }


  render() {
    let vendor;
    let vendorStyle;
    let vendorButton;
    let explainerText;
    let cocktailStyle;
    let cocktailContent;
    let contentDisplay;

    db.map(vendorEntry => {
      if (vendorEntry.id === this.props.id) {
        vendor = vendorEntry;
      }
    });

    if (this.state.displaySetting == 'account') {
      vendorStyle = s.active;
      vendorButton = 'Account Settings';
      explainerText = 'These are vendors in your area selling cocktails for delivery or pickup';
      contentDisplay = <VendorAccountSettings />
    } else {
      vendorStyle = s.inactive;
      vendorButton = 'Account Settings';
    }

    if (this.state.displaySetting === 'cocktails') {
      cocktailStyle = s.active;
      cocktailContent = 'Cocktail Settings';
      explainerText = 'These are cocktails that vendors in your area are selling for delivery or pickup';
      contentDisplay = <VendorCocktailSettings />
    } else {
      cocktailStyle = s.inactive;
      cocktailContent = 'Cocktail Settings';
    }

    return (
      <div className={s.search_result_content}>
        <div className={s.vendor_display}>
          <div className={s.vendor_name}>{vendor.dbaName}</div>

          <div className={s.display_selectors}>
            <div className={vendorStyle} onClick={this.changeDisplayToAccount}>
              {vendorButton}
            </div>
            <div className={cocktailStyle} onClick={this.changeDisplayToCocktails}>
              {cocktailContent}
            </div>
          </div>

          <h2 className={s.result_explainer}>
            {explainerText}
          </h2>

          <div className={s.vendor_setting_content}>
            {contentDisplay}
          </div>

          <div className={s.buttons}>
            <Link to="/search-results">
              <Button type="Secondary" text="Back To Search Results" />
            </Link>

            <Link to="">
              <Button type="Primary" text="Order Cocktails" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(VendorAdminDisplay);
