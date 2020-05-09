import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './ServiceSettings.scss';
import DynamicSetting from '../dynamicSetting/DynamicSetting';

const UPDATE_SERVICE_SETTINGS = `
  mutator UpdateSettings (
    $slug: String!,
    $JWT: String!,
    $doesDelivery: Boolean!,
    $deliveryRadius: Float!,
    $doesPickup: Boolean!)
  protectedUpdateVendor( settings: {
    slug: $slug,
    JWT: $JWT,
    doesDelivery: $doesDelivery,
    deliveryRadius: $deliveryRadius,
    doesPickup: $doesPickup,
  })
`;

function ServiceSettings(props) {
  const { vendor } = props;
  const [doesDelivery, setDoesDelivery] = useState(vendor.doesDelivery);
  const [doesPickup, setDoesPickup] = useState(vendor.doesPickup);
  let miles;

  if (vendor.deliveryRadius === 1) {
    miles = 'mile';
  } else {
    miles = 'miles';
  }

  function UpdateSettings() {}

  function DeliverySettings() {
    if (doesDelivery) {
      return (
        <div className={s.setting}>
          <div className={s.setting_field}>Delivery Radius</div>
          <div className={s.setting_value}>
            {vendor.deliveryRadius} {miles}
          </div>
        </div>
      );
    }
  }

  return (
    <div className={s.settings_content}>
      <div className={s.setting}>
        <div className={s.setting_field}>Does your bar make deliveries?</div>
        <label className={s.switch}>
          <input
            type="checkbox"
            onChange={e => setDoesDelivery(!doesDelivery)}
          />
          <span className={s.slider} />;
        </label>
      </div>

      {DeliverySettings()}

      <div className={s.setting}>
        <div className={s.setting_field}>
          Can customers pick up orders themselves?
        </div>
        <label className={s.switch}>
          <input type="checkbox" onChange={e => setDoesPickup(!doesPickup)} />
          <span className={s.slider} />;
        </label>
      </div>

      <div className={s.setting}>
        <div className={s.setting_field}>Online Store</div>
        <div className={s.setting_value}>{vendor.onlineStore}</div>
      </div>
    </div>
  );
}

export default withStyles(s)(ServiceSettings);
