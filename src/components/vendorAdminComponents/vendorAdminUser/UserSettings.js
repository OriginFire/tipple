import React, {useState} from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './UserSettings.scss';
import DynamicSetting from "../dynamicSetting/DynamicSetting";

function UserSettings(props) {
  const vendor = props.vendorAccount;
  const [name, setName] = useState(vendor.adminName);
  const [phoneNumber, setPhoneNumber] = useState(vendor.adminPhone);
  const [emailAddress, setEmailAddress] = useState(vendor.adminEmail);
  const [password, setPassword] = useState(vendor.adminPassword);

  return (
    <div className={s.settings_content}>
      <DynamicSetting
        settingName="Name"
        settingValue={name}
        settingSave={newValue => {
          setName(newValue);
        }}
      />

      <DynamicSetting
        settingName="Phone Number"
        settingValue={phoneNumber}
        settingSave={newValue => setPhoneNumber(newValue)}
      />

      <DynamicSetting
        settingName="Email Address"
        settingValue={emailAddress}
        settingSave={newValue => {
          setEmailAddress(newValue);
        }}
      />

      <DynamicSetting
        settingName="Passowrd"
        settingValue={password}
        settingSave={newValue => {
          setPassword(newValue);
        }}
      />
    </div>
  );
}

export default withStyles(s)(UserSettings);
