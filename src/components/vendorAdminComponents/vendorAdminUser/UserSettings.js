import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './UserSettings.scss';

function UserSettings(props) {
  const vendor = props.vendorAccount;
  return (
    <div className={s.settings_content}>
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
    </div>
  );
}

export default withStyles(s)(UserSettings);
