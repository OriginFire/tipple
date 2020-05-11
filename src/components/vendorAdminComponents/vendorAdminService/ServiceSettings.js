import React, { useState, useEffect, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './ServiceSettings.scss';
import DynamicSetting from '../dynamicSetting/DynamicSetting';
import ApplicationContext from "../../ApplicationContext";
import {useMutation} from "graphql-hooks";

const UPDATE_SERVICE_SETTINGS = `
  mutation UpdateSettings (
    $slug: String!,
    $JWT: String!,
    $doesDelivery: Boolean!,
    $deliveryRadius: Float!,
    $doesPickup: Boolean!
    $onlineStore: String!,
    ) {
    protectedUpdateVendor( vendor: {
      slug: $slug,
      JWT: $JWT,
      doesDelivery: $doesDelivery,
      deliveryRadius: $deliveryRadius,
      doesPickup: $doesPickup,
      onlineStore: $onlineStore,
    }) {
         id
      }
  }
`;

function ServiceSettings(props) {
  const { vendor } = props;
  const [slug, setSlug] = useState(vendor.slug);
  const [doesDelivery, setDoesDelivery] = useState(vendor.doesDelivery);
  const [deliveryRadius, setDeliveryRadius] = useState(vendor.deliveryRadius);
  const [doesPickup, setDoesPickup] = useState(vendor.doesPickup);
  const [onlineStore, setOnlineStore] = useState(vendor.onlineStore);
  const [updateVendor] = useMutation(UPDATE_SERVICE_SETTINGS);
  const authenticationContext = useContext(ApplicationContext);
  let miles;

  if (vendor.deliveryRadius === 1) {
    miles = 'mile';
  } else {
    miles = 'miles';
  }

  async function settingSave() {
    const update = await updateVendor({
      variables: {
        slug,
        JWT: authenticationContext.context.JWT,
        doesDelivery,
        deliveryRadius,
        doesPickup,
        onlineStore,
      },
    });
    console.log(onlineStore);
  }

  useEffect(() => {
    settingSave();
  }, [doesDelivery, deliveryRadius, doesPickup, onlineStore]);

  function DeliverySettings() {
    if (doesDelivery) {
      return (
        <div>
          <DynamicSetting
            settingName="Delivery Radius"
            settingValue={deliveryRadius}
            specialDisplay={`${deliveryRadius} ${miles}`}
            settingSave={newValue => setDeliveryRadius(parseFloat(newValue))}
          />
        </div>
      );
    }
  }

  function PickupSettings() {
    if (doesPickup) {
      return (
        <div className={s.setting}>
          <div className={s.setting_field}>
            Can customers pick up orders themselves?
          </div>
          <label className={s.switch}>
            <input type="checkbox" onChange={e => setDoesPickup(!doesPickup)} />
            <span className={s.slider} />;
          </label>
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
            checked={doesDelivery}
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
          <input
            type="checkbox"
            checked={doesPickup}
            onChange={e => setDoesPickup(!doesPickup)} />
          <span className={s.slider} />;
        </label>
      </div>

      {PickupSettings()}

      <DynamicSetting
        settingName="Online Store"
        settingValue={onlineStore}
        settingSave={newValue => setOnlineStore(newValue)}
      />
    </div>
  );
}

export default withStyles(s)(ServiceSettings);
