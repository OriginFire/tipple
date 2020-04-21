import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorAccountSettings.scss';
import FormField from "../../sitewideDisplayComponents/formField";
import AddressFormField from "../../utilityComponents/addressFormField/AddressFormField";
import Link from "../../utilityComponents/link";
import Button from "../../sitewideDisplayComponents/Button";

class VendorAccountSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStage: 1,
    };
  }

  render() {
    const vendor = this.props.vendorAccount;
    let formStage = this.state.formStage;
    let pointOfContact;
    let dbaName;
    let emailAddress;
    let password;
    let phoneNumber;
    let entityName;
    let physicalAddress;
    let alcoholLicenseNumber;
    let alcoholLicenseIssuingAgency;
    let alcoholLicenseExpiration;
    let doesDelivery;
    let deliveryRadius;
    let onlineOrdering;

    if (this.props.accountSettingsContent === 'display') {
      return (
        <div className={s.settings_content}>
          <img
            src={vendor.image}
            alt={vendor.dbaName}
            className={s.vendor_image}
          />

          <div className={s.section_wrapper}>
            <div className={s.settings_section}>
              Account User
              <div className={s.setting_type}>Name: {vendor.pointOfContact}</div>

              <div className={s.setting_type}>Telephone Number: {vendor.contactPhoneNumber}</div>

              <div className={s.setting_type}>Email Address: {vendor.contactEmailAddress}</div>

              <div className={s.setting_type}>Password: {vendor.userPassword}</div>
            </div>


            <div className={s.settings_section}>
              Business Information
              <div className={s.setting_type}>{vendor.physicalStreetAddress}</div>

              <div className={s.setting_type}>{vendor.physicalCity}</div>

              <div className={s.setting_type}>{vendor.physicalState}</div>

              <div className={s.setting_type}>{vendor.physicalZipCode}</div>

              <div className={s.setting_type}>Alcohol License Number: {vendor.alcoholLicenseNumber}</div>

              <div className={s.setting_type}>
                Issuing Agency: {vendor.alcoholLicenseIssuingAgency}
              </div>

              <div className={s.setting_type}>Expiration Date: {vendor.alcoholLicenseExpiration}</div>
            </div>

            <div className={s.settings_section}>
              Service Settings
              <div className={s.setting_type}>Does Deliveries? {vendor.doesDelivery}</div>

              <div className={s.setting_type}>Does Pickups? {vendor.doesPickup}</div>

              <div className={s.setting_type}>Delivery Radius: {vendor.deliveryRadius}</div>

              <div className={s.setting_type}>Online Store: {vendor.onlineStore}</div>
            </div>
          </div>
        </div>
        );
    }
    if (this.props.accountSettingsContent === 'edit') {
      return (
        <div className={s.partner_form}>
          {/* eslint-disable-next-line consistent-return */}
          {(() => {
            switch (formStage) {
              case 1:
                return (
                  <div className={s.form_status}>
                    <div className={s.active_status_item}>
                      <div className={s.status_indicator}>Account User</div>
                      <div className={s.status_bar} />
                    </div>
                    <div className={s.status_item} onClick={e => {this.setState({formStage: 2})}}>
                      <div className={s.status_indicator}>Business Details</div>
                    </div>
                    <div className={s.status_item} onClick={e => {this.setState({formStage: 3})}}>
                      <div className={s.status_indicator}>Alcohol License</div>
                    </div>
                    <div className={s.status_item} onClick={e => {this.setState({formStage: 4})}}>
                      <div className={s.status_indicator}>Service Settings</div>
                    </div>
                  </div>
                );
              case 2:
                return (
                  <div className={s.form_status}>
                    <div className={s.status_item} onClick={e => {this.setState({formStage: 1})}}>
                      <div className={s.status_indicator}>Account User</div>
                    </div>
                    <div className={s.active_status_item}>
                      <div className={s.status_indicator}>Business Details</div>
                      <div className={s.status_bar} />
                    </div>
                    <div className={s.status_item} onClick={e => {this.setState({formStage: 3})}}>
                      <div className={s.status_indicator}>Alcohol License</div>
                    </div>
                    <div className={s.status_item} onClick={e => {this.setState({formStage: 4})}}>
                      <div className={s.status_indicator}>Service Settings</div>
                    </div>
                  </div>
                );
              case 3:
                return (
                  <div className={s.form_status}>
                    <div
                      className={s.active_status_item}
                      onClick={e => {this.setState({formStage: 1})}}
                    >
                      <div className={s.status_indicator}>Account User</div>
                    </div>
                    <div className={s.status_item} onClick={e => {this.setState({formStage: 2})}}>
                      <div className={s.status_indicator}>Business Details</div>
                    </div>
                    <div className={s.active_status_item}>
                      <div className={s.status_indicator}>Alcohol License</div>
                      <div className={s.status_bar} />
                    </div>
                    <div className={s.status_item} onClick={e => {this.setState({formStage: 4})}}>
                      <div className={s.status_indicator}>Service Settings</div>
                    </div>
                  </div>
                );
              case 4:
                return (
                  <div className={s.form_status}>
                    <div className={s.status_item} onClick={e => {this.setState({formStage: 1})}}>
                      <div className={s.status_indicator}>Account User</div>
                    </div>
                    <div className={s.status_item} onClick={e => {this.setState({formStage: 2})}}>
                      <div className={s.status_indicator}>Business Details</div>
                    </div>
                    <div className={s.status_item} onClick={e => {this.setState({formStage: 3})}}>
                      <div className={s.status_indicator}>Alcohol License</div>
                    </div>
                    <div className={s.active_status_item}>
                      <div className={s.status_indicator}>Service Settings</div>
                      <div className={s.status_bar} />
                    </div>
                  </div>
                );
            }
          })()}

          {(() => {
            // eslint-disable-next-line default-case
            switch (formStage) {
              case 1:
                return (
                  <form className={s.partner_form_fields}>
                    <FormField
                      placeholder="Full Name"
                      onChange={e => setPointOfContact(e.target.value)}
                      type="text"
                      value={pointOfContact}
                    />
                    <FormField
                      placeholder="Email Address"
                      onChange={e => setEmailAddress(e.target.value)}
                      type="email"
                      value={emailAddress}
                    />
                    <FormField
                      placeholder="Password"
                      onChange={e => setPassword(e.target.value)}
                      type="password"
                      value={password}
                    />
                    <FormField
                      placeholder="Phone Number"
                      onChange={e => setPhoneNumber(e.target.value)}
                      type="tel"
                      value={phoneNumber}
                      pattern="([0-9]{3})-[0-9]{3}-[0-9]{4}"
                      maxlength="10"
                    />
                  </form>
                );

              case 2:
                return (
                  <form className={s.partner_form_fields}>
                    <FormField
                      placeholder="Bar Name (D.B.A.)"
                      onChange={e => setDbaName(e.target.value)}
                      type="text"
                      value={dbaName}
                    />
                    <FormField
                      placeholder="Entity Name"
                      onChange={e => setEntityName(e.target.value)}
                      type="text"
                      value={entityName}
                    />
                    <AddressFormField
                      placeholder="Venue Street Address"
                      value={physicalAddress}
                    />
                  </form>
                );

              case 3:
                return (
                  <form className={s.partner_form_fields}>
                    <FormField
                      placeholder="Alcohol License #"
                      onChange={e => setAlcoholLicenseNumber(e.target.value)}
                      value={alcoholLicenseNumber}
                    />
                    <FormField
                      placeholder="Issuing Agency"
                      onChange={e =>
                        setAlcoholLicenseIssuingAgency(e.target.value)
                      }
                      value={alcoholLicenseIssuingAgency}
                    />
                    <FormField
                      placeholder="Expiration Date"
                      onChange={e => setAlcoholLicenseExpiration(e.target.value)}
                      value={alcoholLicenseExpiration}
                    />
                  </form>
                );

              case 4:
                return (
                  <form className={s.partner_form_fields}>
                    <FormField
                      placeholder="Delivery"
                      onChange={e => setDoesDelivery(e.target.value)}
                      value={doesDelivery}
                    />
                    <FormField
                      placeholder="Delivery Distance"
                      onChange={e => setDeliveryRadius(e.target.value)}
                      value={deliveryRadius}
                    />
                    <FormField
                      placeholder="Online Store (if any)"
                      onChange={e => setOnlineOrdering(e.target.value)}
                      value={onlineOrdering}
                    />
                  </form>
                );
            }
          })()}
        </div>
      )
    };
  }
}

export default withStyles(s)(VendorAccountSettings);
