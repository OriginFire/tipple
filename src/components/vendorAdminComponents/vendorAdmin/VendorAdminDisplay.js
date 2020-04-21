import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorAdminDisplay.scss';
import Button from '../../sitewideDisplayComponents/Button';
import db from '../../../data/dbSimulator/bars';
import VendorAccountSettings from '../vendorAccountSettings/VendorAccountSettings';
import VendorCocktailSettings from '../vendorCocktailSettings/VendorCocktailSettings';

class VendorAdminDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySetting: 'account',
      accountSettingsContent: 'display',
    };
    this.changeDisplayToAccount = this.changeDisplayToAccount.bind(this);
    this.changeDisplayToCocktails = this.changeDisplayToCocktails.bind(this);
    this.handlePrimaryClick = this.handlePrimaryClick.bind(this);
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

  handlePrimaryClick() {
    if (this.state.displaySetting === 'account') {
      if (this.state.accountSettingsContent === 'display') {
        this.setState({accountSettingsContent: 'edit'});
      } else if (this.state.accountSettingsContent === 'edit') {
        this.setState( {accountSettingsContent: 'display'});
      }
    } else {
      /* Activate VendorCocktailSettings GraphQL mutator + scroll event */
    }
  }

  render() {
    let vendor;
    let vendorStyle;
    let vendorButton;
    let cocktailStyle;
    let cocktailButton;
    let contentDisplay;
    let accountSettingsContent = 'display';
    let primaryButtonText;

    db.map(vendorEntry => {
      if (vendorEntry.id === this.props.id) {
        vendor = vendorEntry;
      }
    });

    if (this.state.displaySetting == 'account') {
      vendorStyle = s.active;
      vendorButton = 'Account Settings';
      contentDisplay = <VendorAccountSettings vendorAccount={vendor} accountSettingsContent={this.state.accountSettingsContent} />;
      if (this.state.accountSettingsContent === 'display') {
        primaryButtonText = 'Edit Account Settings';
      } else if (this.state.accountSettingsContent === 'edit') {
        primaryButtonText = 'Save Changes';
      }
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

    console.log(this.state.accountSettingsContent);

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
            <Button
              type="Primary"
              onClick={e => this.handlePrimaryClick()}
              text={primaryButtonText}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(VendorAdminDisplay);
