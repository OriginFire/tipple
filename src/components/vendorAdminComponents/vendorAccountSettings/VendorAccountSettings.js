import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorAccountSettings.scss';
import Link from '../../utilityComponents/link';
import db from '../../../data/dbSimulator/bars';

class VendorAccountSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const vendor = this.props.vendorAccount;

    return (
      <div className={s.settings_content}>
        <img src={vendor.image} />

        <div className={s.setting_type}>{vendor.pointOfContact}</div>

        <div className={s.setting_type}>{vendor.contactEmailAddress}</div>

        <div className={s.setting_type}>{vendor.contactPhoneNumber}</div>

        <div className={s.setting_type}>{vendor.userPassword}</div>

        <div className={s.setting_type}>{vendor.dbaName}</div>

        <div className={s.setting_type}>{vendor.physicalStreetAddress}</div>

        <div className={s.setting_type}>{vendor.physicalCity}</div>

        <div className={s.setting_type}>{vendor.physicalState}</div>

        <div className={s.setting_type}>{vendor.physicalZipCode}</div>

        <div className={s.setting_type}>{vendor.alcoholLicenseNumber}</div>

        <div className={s.setting_type}>{vendor.alcoholLicenseIssuingAgency}</div>

        <div className={s.setting_type}>{vendor.alcoholLicenseExpiration}</div>

        <div className={s.setting_type}>{vendor.doesDelivery}</div>

        <div className={s.setting_type}>{vendor.doesPickup}</div>

        <div className={s.setting_type}>{vendor.deliveryRadius}</div>

        <div className={s.setting_type}>{vendor.onlineStore}</div>
      </div>
    );
  }
}

export default withStyles(s)(VendorAccountSettings);
