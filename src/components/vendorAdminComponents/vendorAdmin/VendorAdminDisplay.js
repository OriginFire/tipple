import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorAdminDisplay.scss';
import Button from '../../sitewideDisplayComponents/Button';
import Link from '../../utilityComponents/link';
import db from '../../../data/dbSimulator/bars';
import VendorAccountSettings from '../vendorAccountSettings/VendorAccountSettings';
import VendorCocktailSettings from '../vendorCocktailSettings/VendorCocktailSettings';

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
      this.setState({
        displaySetting: 'account',
      });
    }
  }

  changeDisplayToCocktails() {
    if (this.state.displaySetting === 'account') {
      this.setState({
        displaySetting: 'cocktails',
      });
    }
  }

  render() {
    let vendor;
    let vendorStyle;
    let vendorButton;
    let cocktailStyle;
    let cocktailButton;
    let contentDisplay;
    let primaryButtonText;

    db.map(vendorEntry => {
      if (vendorEntry.id === this.props.id) {
        vendor = vendorEntry;
      }
    });

    if (this.state.displaySetting == 'account') {
      vendorStyle = s.active;
      vendorButton = 'Account Settings';
      contentDisplay = <VendorAccountSettings vendorAccount={vendor} />;
      primaryButtonText = 'Edit Account Settings';
    } else {
      vendorStyle = s.inactive;
      vendorButton = 'Account Settings';
    }

    if (this.state.displaySetting === 'cocktails') {
      cocktailStyle = s.active;
      cocktailButton = 'Cocktail Settings';
      contentDisplay = <VendorCocktailSettings vendorAccount={vendor} />;
      primaryButtonText = 'Add A Cocktail';
    } else {
      cocktailStyle = s.inactive;
      cocktailButton = 'Cocktail Settings';
    }

    return (
      <div className={s.container}>
        <div className={s.vendor_admin_display}>
          <div className={s.vendor_name}>{vendor.dbaName}</div>

          <h2 className={s.result_explainer}>
            Here you can manage {vendor.dbaName}'s account details (user info,
            online service settings, cocktails, etc.)
          </h2>

          <div className={s.display_selectors}>
            <div className={vendorStyle} onClick={this.changeDisplayToAccount}>
              {vendorButton}
            </div>
            <div
              className={cocktailStyle}
              onClick={this.changeDisplayToCocktails}
            >
              {cocktailButton}
            </div>
          </div>

          <div className={s.vendor_setting_content}>{contentDisplay}</div>

          <div className={s.buttons}>
            <Link to="">
              <Button
                type="Primary"
                onClick={this.handlePrimaryClick}
                text={primaryButtonText}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(VendorAdminDisplay);
