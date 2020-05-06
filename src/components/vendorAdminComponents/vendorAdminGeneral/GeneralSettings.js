import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './GeneralSettings.scss';

function GeneralSettings(props) {
  const { vendor } = props;

  return (
    <div className={s.settings_content}>
      <img
        src={`data:image/jpg;base64,${vendor.vendorImage}`}
        alt={vendor.dbaName}
        className={s.vendor_image}
      />

      <div className={s.setting}>
        <div className={s.setting_field}>Business Name (D.B.A.)</div>
        <div className={s.setting_value}>{vendor.dbaName}</div>
      </div>
      <div className={s.setting}>
        <div className={s.setting_field}>Street Address</div>
        <div className={s.setting_value}>{vendor.physicalStreetAddress}</div>
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
        <div className={s.setting_value}>{vendor.alcoholLicenseNumber}</div>
      </div>
      <div className={s.setting}>
        <div className={s.setting_field}>Alcohol Licensing Agency</div>
        <div className={s.setting_value}>
          {vendor.alcoholLicenseIssuingAgency}
        </div>
      </div>
      <div className={s.setting}>
        <div className={s.setting_field}>Expiration Date</div>
        <div className={s.setting_value}>{vendor.alcoholLicenseExpiration}</div>
      </div>
    </div>
  );
}

export default withStyles(s)(GeneralSettings);
