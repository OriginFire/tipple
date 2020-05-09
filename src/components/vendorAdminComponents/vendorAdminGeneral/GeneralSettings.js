import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './GeneralSettings.scss';
import DynamicSetting from '../dynamicSetting/DynamicSetting';

function GeneralSettings(props) {
  const { vendor } = props;
  const [vendorSettings, setVendorSettings] = useState(vendor);

  return (
    <div className={s.settings_content}>
      <div className={s.explainer}>
        Currently, this account is missing required information and will not
        appear in search results on the site.
      </div>
      <br />
      <div className={s.explainer}>
        To correct this, please upload the following:
        <ul>
          <li className={s.to_do}>The vendor image</li>
          <li className={s.to_do}>Service settings</li>
          <li className={s.to_do}>At least one cocktail</li>
        </ul>
      </div>

      <img
        src={`data:image/jpg;base64,${vendor.vendorImage}`}
        alt={vendor.dbaName}
        className={s.vendor_image}
      />

      <DynamicSetting
        settingName="Business Name (D.B.A.)"
        settingValue={vendor.dbaName}
      />

      <DynamicSetting
        settingName="Venue Address"
        settingValue={vendor.physicalAddress}
      />

      <DynamicSetting
        settingName="Alcohol License #"
        settingValue={vendor.alcoholLicenseNumber}
      />

      <DynamicSetting
        settingName="Licensing Agency"
        settingValue={vendor.alcoholLicenseIssuingAgency}
      />

      <DynamicSetting
        settingName="Expiration Date"
        settingValue={vendor.alcoholLicenseExpiration}
      />
    </div>
  );
}

export default withStyles(s)(GeneralSettings);
