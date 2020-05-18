import React, { useState, useEffect, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation } from 'graphql-hooks';
import s from './ServiceSettings.scss';
import DynamicSetting from '../dynamicSetting/DynamicSetting';
import ApplicationContext from '../../ApplicationContext';
import weekdays from '../../../consts/weekdays';
import AvailabilityInput from "./availabilityInput/AvailabilityInput";

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

const data = [
  {
    day: weekdays.sunday,
    hours: [0, 1, 2, 3],
  },
  {
    day: weekdays.monday,
    hours: [],
  },
  {
    day: weekdays.tuesday,
    hours: [],
  },
  {
    day: weekdays.wednesday,
    hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  },
  {
    day: weekdays.thursday,
    hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
  },
  {
    day: weekdays.friday,
    hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
  },
  {
    day: weekdays.saturday,
    hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
  },
];

function deconstructQueryData(availabilityObject) {
  let localState = [];
  availabilityObject.map(day => {
    const operatingHours = day.hours.sort((a, b) => a - b);
    let shifts = [];
    let currentSequence = [];
    operatingHours.map((hour, index, hours) => {
      if (!currentSequence[0] && currentSequence[0] !== 0) {
        currentSequence[0] = hour;
      }
      if (!currentSequence[1]) {
        currentSequence[1] = hour;
      }
      if (hours[index - 1]) {
        if (hour - hours[index - 1] === 1) {
          currentSequence[1] = hour;
        } else {
          shifts.push(currentSequence);
          currentSequence = [];
        }
      }
      if (!hours[index + 1]) {
        shifts.push(currentSequence);
        currentSequence = [];
      }
    });
    localState.push({
      day: day.day,
      shifts: shifts,
    });
  });
  return localState;
}

function reconstructQueryData(localState) {

}

function ServiceSettings(props) {
  const { vendor } = props;
  const [slug, setSlug] = useState(vendor.slug);
  const [doesDelivery, setDoesDelivery] = useState(vendor.doesDelivery);
  const [deliveryRadius, setDeliveryRadius] = useState(vendor.deliveryRadius);
  const [scheduledDeliveryRequired, setScheduledDeliveryRequired] = useState(
    false,
  );
  const [deliveryFulfillment, setDeliveryFulfillment] = useState(0);
  const [deliveryAvailability, setDeliveryAvailability] = useState(deconstructQueryData(data));
  const [doesPickup, setDoesPickup] = useState(vendor.doesPickup);
  const [scheduledPickupRequired, setScheduledPickupRequired] = useState(false);
  const [pickupFulfillment, setPickupFulfillment] = useState(0);
  const [pickupAvailability, setPickupAvailability] = useState(deconstructQueryData(data));
  const [onlineStore, setOnlineStore] = useState(vendor.onlineStore);
  const [updateVendor] = useMutation(UPDATE_SERVICE_SETTINGS);
  const authenticationContext = useContext(ApplicationContext);
  let miles;
  let hours;

  if (vendor.deliveryRadius === 1) {
    miles = 'mile';
  } else {
    miles = 'miles';
  }

  if (deliveryFulfillment === 1) {
    hours = 'hour';
  } else {
    hours = 'hours';
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
  }

  useEffect(() => {
    settingSave();
  }, [doesDelivery, deliveryRadius, doesPickup, onlineStore]);

  function DeliverySettings() {
    if (doesDelivery) {
      return (
        <div>
          <div className={s.setting_explainer}>
            How many miles away from your venue will you fill delivery orders?
          </div>
          <DynamicSetting
            settingName="Delivery Radius"
            settingValue={deliveryRadius}
            specialDisplay={`${deliveryRadius} ${miles}`}
            settingSave={newValue => setDeliveryRadius(parseFloat(newValue))}
          />

          <div className={s.setting}>
            <div className={s.setting_field}>
              Do you require customers to schedule deliveries in advance (i.e.
              NO on-demand service)?
            </div>
            <label className={s.switch}>
              <input
                type="checkbox"
                checked={scheduledDeliveryRequired}
                onChange={e =>
                  setScheduledDeliveryRequired(!scheduledDeliveryRequired)
                }
              />
              <span className={s.slider} />
            </label>
          </div>

          {scheduledDeliveryRequired && (
            <div>
              <div className={s.setting_explainer}>
                How many hours in advance are customers required to schedule
                delivery orders?
              </div>
              <DynamicSetting
                settingName="Minimum Fulfillment Time"
                settingValue={deliveryFulfillment}
                specialDisplay={`${deliveryFulfillment} ${hours}`}
                settingSave={newValue =>
                  setDeliveryFulfillment(parseFloat(newValue))
                }
              />
            </div>
          )}

          <div className={s.setting_explainer}>
            What times and days are customers able to receive delivery orders?
          </div>
          <AvailabilityInput availability={deliveryAvailability} />
        </div>
      );
    }
  }

  function PickupSettings() {
    if (doesPickup) {
      return (
        <div>
          <div className={s.setting}>
            <div className={s.setting_field}>
              Do you require customers to schedule pickups in advance (i.e. NO
              on-demand pickup)?
            </div>
            <label className={s.switch}>
              <input
                type="checkbox"
                checked={scheduledPickupRequired}
                onChange={e =>
                  setScheduledPickupRequired(!scheduledPickupRequired)
                }
              />
              <span className={s.slider} />
            </label>
          </div>

          {scheduledPickupRequired && (
            <div>
              <div className={s.setting_explainer}>
                How many hours in advance are customers required to schedule
                delivery orders?
              </div>
              <DynamicSetting
                settingName="Minimum Fulfillment Time"
                settingValue={deliveryFulfillment}
                specialDisplay={`${deliveryFulfillment} ${hours}`}
                settingSave={newValue =>
                  setDeliveryFulfillment(parseFloat(newValue))
                }
              />
            </div>
          )}

          <div className={s.setting_explainer}>
            What times and days can customers pick up orders directly from the venue?
          </div>
          <AvailabilityInput availability={pickupAvailability} />
        </div>
      );
    }
  }

  return (
    <div className={s.settings_content}>
      <div className={s.section_heading}>Delivery Settings</div>
      <div className={s.setting}>
        <div className={s.setting_field}>Does your venue make deliveries?</div>
        <label className={s.switch}>
          <input
            type="checkbox"
            checked={doesDelivery}
            onChange={e => setDoesDelivery(!doesDelivery)}
          />
          <span className={s.slider} />
        </label>
      </div>

      {DeliverySettings()}
      <br />
      <br />
      <div className={s.section_heading}>Pickup Settings</div>
      <div className={s.setting}>
        <div className={s.setting_field}>
          Can customers pick up orders from the venue themselves?
        </div>
        <label className={s.switch}>
          <input
            type="checkbox"
            checked={doesPickup}
            onChange={e => setDoesPickup(!doesPickup)}
          />
          <span className={s.slider} />
        </label>
      </div>

      {PickupSettings()}
    </div>
  );
}

export default withStyles(s)(ServiceSettings);
