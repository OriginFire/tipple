import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorAccountDetails.scss';
import FormField from '../../sitewideDisplayComponents/formField';
import AddressFormField from '../../utilityComponents/addressFormField/AddressFormField';

class VendorAccountDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openForm: null,
    };
    this.openUserForm = this.openUserForm.bind(this);
    this.openBusinessForm = this.openBusinessForm.bind(this);
    this.openServiceForm = this.openServiceForm.bind(this);
  }

  openUserForm() {
    this.setState({
      openForm: 'userform',
    });
  }

  openBusinessForm() {
    this.setState({
      openForm: 'businessform',
    });
  }

  openServiceForm() {
    this.setState({
      openForm: 'serviceform',
    });
  }

  render() {
    const vendor = this.props.vendorAccount;
    let miles;
    let displayUserForm;
    let displayBusinessForm;
    let displayServiceForm;

    if (this.state.openForm === 'userform') {
      displayUserForm = (<div></div>)
    } else if (this.state.openForm === 'businessform') {
      displayBusinessForm = (
        <div className={s.settings_form}>The business form</div>
      )
    } else if (this.state.openForm === 'serviceform') {
      displayServiceForm = (
        <div className={s.settings_form}>The service form</div>
      )
    } else {}

    console.log(this.state.openForm);

    if (vendor.deliveryRadius === 1) {
      miles = 'mile';
    } else {
      miles = 'miles';
    }

    return (
      <div className={s.settings_content}>
        <img
          src={vendor.vendorImage}
          alt={vendor.dbaName}
          className={s.vendor_image}
        />

        <div className={s.section_wrapper}>
          <div className={s.settings_section} onClick={e => this.openUserForm()}>
            <div className={s.section_name}>Account User</div>
            <div className={s.setting}>
              <div className={s.setting_field}>Name</div>
              <div className={s.setting_value}>{vendor.adminName}</div>
            </div>
            <div className={s.setting}>
              <div className={s.setting_field}>Phone Number</div>
              <div className={s.setting_value}>{vendor.adminPhone}</div>
            </div>
            <div className={s.setting}>
              <div className={s.setting_field}>Email Address</div>
              <div className={s.setting_value}>{vendor.adminEmail}</div>
            </div>
            <div className={s.setting}>
              <div className={s.setting_field}>Password</div>
              <div className={s.setting_value}>{vendor.userPassword}</div>
            </div>
            <div className={s.section_form}>{displayUserForm}</div>
          </div>

          <div className={s.settings_section} onClick={e => this.openBusinessForm()}>
            Business Information
            <div className={s.section_form}>{displayBusinessForm}</div>
            <div className={s.setting}>
              <div className={s.setting_field}>Business Name (D.B.A.)</div>
              <div className={s.setting_value}>{vendor.dbaName}</div>
            </div>
            <div className={s.setting}>
              <div className={s.setting_field}>Street Address</div>
              <div className={s.setting_value}>
                {vendor.physicalStreetAddress}
              </div>
            </div>
            <div className={s.setting}>
              <div className={s.setting_field}>City</div>
              <div className={s.setting_value}>{vendor.physicalCity}</div>
            </div>
            <div className={s.setting}>
              <div className={s.setting_field}>State</div>
              <div className={s.setting_value}>{vendor.physicalState}</div>
            </div>
            <div className={s.setting}>
              <div className={s.setting_field}>Zip Code</div>
              <div className={s.setting_value}>{vendor.physicalZipCode}</div>
            </div>
            <div className={s.setting}>
              <div className={s.setting_field}>Alcohol License #</div>
              <div className={s.setting_value}>
                {vendor.alcoholLicenseNumber}
              </div>
            </div>
            <div className={s.setting}>
              <div className={s.setting_field}>Alcohol Licensing Agency</div>
              <div className={s.setting_value}>
                {vendor.alcoholLicenseIssuingAgency}
              </div>
            </div>
            <div className={s.setting}>
              <div className={s.setting_field}>Expiration Date</div>
              <div className={s.setting_value}>
                {vendor.alcoholLicenseExpiration}
              </div>
            </div>
          </div>

          <div className={s.settings_section} onClick={e => this.openServiceForm()}>
            Service Settings
            <div className={s.section_form}>{displayServiceForm}</div>
            <div className={s.setting}>
              <div className={s.setting_field}>Delivery</div>
              <div className={s.setting_value}>{vendor.doesDelivery}</div>
            </div>
            <div className={s.setting}>
              <div className={s.setting_field}>Pickup</div>
              <div className={s.setting_value}>{vendor.doesPickup}</div>
            </div>
            <div className={s.setting}>
              <div className={s.setting_field}>Delivery Radius</div>
              <div className={s.setting_value}>
                {vendor.deliveryRadius} {miles}
              </div>
            </div>
            <div className={s.setting}>
              <div className={s.setting_field}>Online Store</div>
              <div className={s.setting_value}>{vendor.onlineStore}</div>
            </div>
          </div>
        </div>
      </div>

      /*
    if (this.props.accountSettingsContent === 'edit') {

        const { formStage } = this.state;
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

      return (
        <div className={s.partner_form}>
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

          */
    );
  }
}

export default withStyles(s)(VendorAccountDetails);
