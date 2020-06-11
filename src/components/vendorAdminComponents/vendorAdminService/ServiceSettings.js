import React, { useState, useEffect, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation } from 'graphql-hooks';
import s from './ServiceSettings.scss';
import DynamicSetting from '../dynamicSetting/DynamicSetting';
import ApplicationContext from '../../ApplicationContext';
import Availability from './availability/Availability';

const UPDATE_SERVICE_SETTINGS = `
  mutation UpdateSettings (
    $slug: String!,
    $JWT: String!,
    $doesDelivery: Boolean!,
    $deliveryRadius: Float!,
    $doesPickup: Boolean!
    $longitude: Float!,
    $latitude: Float!,
    ) {
    protectedUpdateVendor( vendor: {
      slug: $slug,
      JWT: $JWT,
      doesDelivery: $doesDelivery,
      deliveryRadius: $deliveryRadius,
      doesPickup: $doesPickup,
      longitude: $longitude,
      latitude: $latitude,
    }) {
         id
      }
  }
`;

function resolveAvailabilityType(availability, stateAvailabilityType) {
  let initialState;
  availability.map(vendorAvailability => {
    if (vendorAvailability.availabilityType === stateAvailabilityType) {
      initialState = vendorAvailability.AvailabilitySchedules;
    }
  });
  return initialState;
}

function ServiceSettings(props) {
  const { vendor } = props;
  const [slug, setSlug] = useState(vendor.slug);
  const [longitude, setLongitude] = useState(vendor.longitude);
  const [latitude, setLatitude] = useState(vendor.latitude);
  const [doesDelivery, setDoesDelivery] = useState(vendor.doesDelivery);
  const [deliveryRadius, setDeliveryRadius] = useState(vendor.deliveryRadius);
  const [scheduledDeliveryRequired, setScheduledDeliveryRequired] = useState(vendor.scheduledDeliveryRequired);
  const [deliveryFulfillment, setDeliveryFulfillment] = useState(vendor.minimumDeliveryFulfillment);
  const [deliveryAvailability, setDeliveryAvailability] = useState(resolveAvailabilityType(vendor.Availabilities, 'delivery'));
  const [doesPickup, setDoesPickup] = useState(vendor.doesPickup);
  const [scheduledPickupRequired, setScheduledPickupRequired] = useState(vendor.scheduledPickupRequired);
  const [pickupFulfillment, setPickupFulfillment] = useState(vendor.minimumPickupFulfillment);
  const [pickupAvailability, setPickupAvailability] = useState(resolveAvailabilityType(vendor.Availabilities, 'pickup'));
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
        longitude,
        latitude,
      },
    });
  }

  useEffect(() => {
    settingSave();
  }, [
    doesDelivery,
    deliveryRadius,
    scheduledDeliveryRequired,
    deliveryFulfillment,
    deliveryAvailability,
    doesPickup,
    scheduledPickupRequired,
    pickupFulfillment,
    pickupAvailability,
  ]);

  function DeliverySettings() {
    if (doesDelivery) {
      return (
        <div className={s.settings_block}>
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
          <Availability
            availability={deliveryAvailability}
            setNewAvailability={newAvailability =>
              setDeliveryAvailability(newAvailability)
            }
          />
        </div>
      );
    }
  }

  function PickupSettings() {
    if (doesPickup) {
      return (
        <div className={s.settings_block}>
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
            What times and days can customers pick up orders directly from the
            venue?
          </div>
          <Availability
            availability={pickupAvailability}
            setNewAvailability={newAvailability =>
              setPickupAvailability(newAvailability)
            }
          />
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
