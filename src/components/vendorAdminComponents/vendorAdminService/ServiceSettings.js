import React, { useState, useEffect, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation } from 'graphql-hooks';
import s from './ServiceSettings.scss';
import DynamicSetting from '../dynamicSetting/DynamicSetting';
import ApplicationContext from '../../ApplicationContext';
import weekdays from '../../../consts/weekdays';

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
  const [scheduledDeliveryRequired, setScheduledDeliveryRequired] = useState(
    false,
  );
  const [deliveryFulfillment, setDeliveryFulfillment] = useState(0);
  const [deliveryAvailability, setDeliveryAvailability] = useState([
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
      hours: [],
    },
    {
      day: weekdays.thursday,
      hours: [],
    },
    {
      day: weekdays.friday,
      hours: [],
    },
    {
      day: weekdays.saturday,
      hours: [],
    },
  ]);
  const [doesPickup, setDoesPickup] = useState(vendor.doesPickup);
  const [scheduledPickupRequired, setScheduledPickupRequired] = useState(false);
  const [pickupFulfillment, setPickupFulfillment] = useState(0);
  const [pickupAvailability, setPickupAvailability] = useState([
    {
      day: weekdays.sunday,
      hours: [],
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
      hours: [],
    },
    {
      day: weekdays.thursday,
      hours: [],
    },
    {
      day: weekdays.friday,
      hours: [],
    },
    {
      day: weekdays.saturday,
      hours: [],
    },
  ]);
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
            What times and days can customers receive delivery orders?
          </div>

          <div>
            {deliveryAvailability.map(day => {
              console.log(day);
              return (
                <div className={s.availability_day}>
                  <div className={s.day_indicator}>{day.day}</div>

                  <div className={s.shift_list}>
                    {day.hours.map((hour, index, hours) => {
                      if (hours[index - 1] && (hour === (hours[index - 1] + 1))) {
                        console.log('Here I am!');
                      }
                    })}
                    <div className={s.shift}>
                      <label
                        className={s.availability_selector_label}
                        htmlFor="start time"
                      >
                        Shift Start Time
                      </label>
                      <select
                        id="start time"
                        className={s.availability_selector}
                      >
                        <option value="12 AM">12 AM</option>
                        <option value="1 AM">1 AM</option>
                        <option value="2 AM">2 AM</option>
                        <option value="3 AM">3 AM</option>
                        <option value="4 AM">4 AM</option>
                        <option value="5 AM">5 AM</option>
                        <option value="6 AM">6 AM</option>
                        <option value="7 AM">7 AM</option>
                        <option value="8 AM">8 AM</option>
                        <option value="9 AM">9 AM</option>
                        <option value="10 AM">10 AM</option>
                        <option value="11 AM">11 AM</option>
                        <option value="12 PM">12 PM</option>
                        <option value="1 PM">1 PM</option>
                        <option value="2 PM">2 PM</option>
                        <option value="3 PM">3 PM</option>
                        <option value="4 PM">4 PM</option>
                        <option value="5 PM">5 PM</option>
                        <option value="6 PM">6 PM</option>
                        <option value="7 PM">7 PM</option>
                        <option value="8 PM">8 PM</option>
                        <option value="9 PM">9 PM</option>
                        <option value="10 PM">10 PM</option>
                        <option value="11 PM">11 PM</option>
                        <option value="12 PM">12 PM</option>
                      </select>

                      <label
                        className={s.availability_selector_label}
                        htmlFor="end"
                      >
                        Shift End Time
                      </label>
                      <select id="end" className={s.availability_selector}>
                        <option value="12 AM">12 AM</option>
                        <option value="1 AM">1 AM</option>
                        <option value="2 AM">2 AM</option>
                        <option value="3 AM">3 AM</option>
                        <option value="4 AM">4 AM</option>
                        <option value="5 AM">5 AM</option>
                        <option value="6 AM">6 AM</option>
                        <option value="7 AM">7 AM</option>
                        <option value="8 AM">8 AM</option>
                        <option value="9 AM">9 AM</option>
                        <option value="10 AM">10 AM</option>
                        <option value="11 AM">11 AM</option>
                        <option value="12 PM">12 PM</option>
                        <option value="1 PM">1 PM</option>
                        <option value="2 PM">2 PM</option>
                        <option value="3 PM">3 PM</option>
                        <option value="4 PM">4 PM</option>
                        <option value="5 PM">5 PM</option>
                        <option value="6 PM">6 PM</option>
                        <option value="7 PM">7 PM</option>
                        <option value="8 PM">8 PM</option>
                        <option value="9 PM">9 PM</option>
                        <option value="10 PM">10 PM</option>
                        <option value="11 PM">11 PM</option>
                        <option value="12 PM">12 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
