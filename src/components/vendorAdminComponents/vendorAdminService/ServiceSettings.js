import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './ServiceSettings.scss';

function ServiceSettings(props) {
  const { vendor } = props;
  let miles;

  if (vendor.deliveryRadius === 1) {
    miles = 'mile';
  } else {
    miles = 'miles';
  }

  return (
    <div className={s.settings_content}>
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
  );
}

export default withStyles(s)(ServiceSettings);
