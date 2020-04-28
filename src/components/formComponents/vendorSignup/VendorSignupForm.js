import withStyles from 'isomorphic-style-loader/withStyles';
import React, { useState } from 'react';
import { useMutation } from 'graphql-hooks';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import s from './VendorSignupForm.scss';
import FormField from '../../sitewideDisplayComponents/formField/FormField';
import AddressFormField from '../../utilityComponents/addressFormField/AddressFormField';
import Button from '../../sitewideDisplayComponents/Button/Button';
import Link from '../../utilityComponents/link/Link';
import history from '../../../history';

const CREATE_VENDOR_MUTATION = `
  mutation CreateVendor($dbaName: String!,
  $adminName: String!,
  $adminEmail: String!,
  $adminPhone: String!,
  $adminPassword: String!,
  $physicalAddress: String!,
  $latitude: Float!,
  $longitude: Float!,
  $alcoholLicenseNumber: String!,
  $alcoholLicenseIssuingAgency: String!,
  $alcoholLicenseExpiration: String!,
  $deliveryRadius: String!)
  {
    newVendor(vendor:{
    dbaName: $dbaName,
    adminName: $adminName,
    adminEmail: $adminEmail,
    adminPhone: $adminPhone,
    adminPassword: $adminPassword,
    physicalAddress: $physicalAddress,
    latitude: $latitude,
    longitude: $longitude,
    alcoholLicenseNumber: $alcoholLicenseNumber,
    alcoholLicenseIssuingAgency: $alcoholLicenseIssuingAgency,
    alcoholLicenseExpiration: $alcoholLicenseExpiration,
    deliveryRadius: $deliveryRadius}) {
      slug
    }
  }
`;

function VendorSignupForm() {
  const [dbaName, setDbaName] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminPhone, setAdminPhone] = useState('');
  const [entityName, setEntityName] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');
  const [physicalStreetAddress, setPhysicalStreetAddress] = useState('');
  const [physicalCity, setPhysicalCity] = useState('');
  const [physicalState, setPhysicalState] = useState('');
  const [physicalZipCode, setPhysicalZipCode] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [alcoholLicenseNumber, setAlcoholLicenseNumber] = useState('');
  const [
    alcoholLicenseIssuingAgency,
    setAlcoholLicenseIssuingAgency,
  ] = useState('');
  const [alcoholLicenseExpiration, setAlcoholLicenseExpiration] = useState('');
  const [doesDelivery, setDoesDelivery] = useState('');
  const [deliveryRadius, setDeliveryRadius] = useState('');
  const [onlineStore, setOnlineStore] = useState('');
  const [formStage, setFormStage] = useState(1);

  const [createVendor] = useMutation(CREATE_VENDOR_MUTATION);

  function addressSelection(address) {
    console.log(address);
    setPhysicalAddress(address);
    geocodeByAddress(address).then(geoResults => {
      getLatLng(geoResults[0]).then(lLResults => {
        setLatitude(lLResults.lat);
        setLongitude(lLResults.lng);
      });
    });
  }

  async function createNewVendor() {
    console.log('click!');
    const res = await createVendor({
      variables: {
        dbaName,
        adminName,
        adminEmail,
        adminPhone,
        adminPassword,
        physicalAddress,
        latitude,
        longitude,
        alcoholLicenseNumber,
        alcoholLicenseIssuingAgency,
        alcoholLicenseExpiration,
        deliveryRadius,
      },
    });
    console.log(res);
    history.push(`/vendor/${res.data.newVendor.slug}`); // TODO: why is newVendor here?
  }

  // TODO: reactor this
  return (
    <div className={s.vendor_signup_content}>
      <h1 className={s.form_explainer}>
        List your cocktail delivery or takeout business on Tipple.
      </h1>
      <div className={s.form}>
        {/* eslint-disable-next-line consistent-return */}
        {(() => {
          switch (formStage) {
            case 1:
              return (
                <div className={s.form_status}>
                  <div className={s.active_status_item}>
                    <div className={s.status_indicator}>Account User</div>
                    <div className={s.status_bar} />
                  </div>
                  <div className={s.status_item} onClick={e => setFormStage(2)}>
                    <div className={s.status_indicator}>Business Details</div>
                  </div>
                  <div className={s.status_item} onClick={e => setFormStage(3)}>
                    <div className={s.status_indicator}>Alcohol License</div>
                  </div>
                  <div className={s.status_item} onClick={e => setFormStage(4)}>
                    <div className={s.status_indicator}>Service Settings</div>
                  </div>
                </div>
              );
            case 2:
              return (
                <div className={s.form_status}>
                  <div className={s.status_item} onClick={e => setFormStage(1)}>
                    <div className={s.status_indicator}>Account User</div>
                  </div>
                  <div className={s.active_status_item}>
                    <div className={s.status_indicator}>Business Details</div>
                    <div className={s.status_bar} />
                  </div>
                  <div className={s.status_item} onClick={e => setFormStage(3)}>
                    <div className={s.status_indicator}>Alcohol License</div>
                  </div>
                  <div className={s.status_item} onClick={e => setFormStage(4)}>
                    <div className={s.status_indicator}>Service Settings</div>
                  </div>
                </div>
              );
            case 3:
              return (
                <div className={s.form_status}>
                  <div
                    className={s.active_status_item}
                    onClick={e => setFormStage(1)}
                  >
                    <div className={s.status_indicator}>Account User</div>
                  </div>
                  <div className={s.status_item} onClick={e => setFormStage(2)}>
                    <div className={s.status_indicator}>Business Details</div>
                  </div>
                  <div className={s.active_status_item}>
                    <div className={s.status_indicator}>Alcohol License</div>
                    <div className={s.status_bar} />
                  </div>
                  <div className={s.status_item} onClick={e => setFormStage(4)}>
                    <div className={s.status_indicator}>Service Settings</div>
                  </div>
                </div>
              );
            case 4:
              return (
                <div className={s.form_status}>
                  <div className={s.status_item} onClick={e => setFormStage(1)}>
                    <div className={s.status_indicator}>Account User</div>
                  </div>
                  <div className={s.status_item} onClick={e => setFormStage(2)}>
                    <div className={s.status_indicator}>Business Details</div>
                  </div>
                  <div className={s.status_item} onClick={e => setFormStage(3)}>
                    <div className={s.status_indicator}>Alcohol License</div>
                  </div>
                  <div className={s.active_status_item}>
                    <div className={s.status_indicator}>Service Settings</div>
                    <div className={s.status_bar} />
                  </div>
                </div>
              );
          }
        })()}

        {(() => {
          switch (formStage) {
            case 1:
              return (
                <form className={s.partner_form_fields}>
                  <FormField
                    placeholder="Full Name"
                    onChange={e => setAdminName(e.target.value)}
                    type="text"
                    value={adminName}
                  />
                  <FormField
                    placeholder="Email Address"
                    onChange={e => setAdminEmail(e.target.value)}
                    type="email"
                    value={adminEmail}
                  />
                  <FormField
                    placeholder="Password"
                    onChange={e => setAdminPassword(e.target.value)}
                    type="password"
                    value={adminPassword}
                  />
                  <FormField
                    placeholder="Phone Number"
                    onChange={e => setAdminPhone(e.target.value)}
                    type="tel"
                    value={adminPhone}
                    pattern="([0-9]{3})-[0-9]{3}-[0-9]{4}"
                    maxlength="10"
                  />
                </form>
              );

            case 2:
              return (
                <form className={s.partner_form_fields}>
                  <AddressFormField
                    placeholder="Business Address"
                    value={physicalAddress}
                    onAddressSelection={addressSelection}
                  />
                  <FormField
                    placeholder="Business Name (D.B.A.)"
                    onChange={e => setDbaName(e.target.value)}
                    type="text"
                    value={dbaName}
                  />
                  <FormField
                    placeholder="Legal Entity Name"
                    onChange={e => setEntityName(e.target.value)}
                    type="text"
                    value={entityName}
                  />
                </form>
              );

            case 3:
              return (
                <form className={s.partner_form_fields}>
                  <FormField
                    placeholder="Alcohol License #"
                    onChange={e => setAlcoholLicenseNumber(e.target.value)}
                    value={alcoholLicenseNumber}
                  />
                  <FormField
                    placeholder="Issuing Agency"
                    onChange={e =>
                      setAlcoholLicenseIssuingAgency(e.target.value)
                    }
                    value={alcoholLicenseIssuingAgency}
                  />
                  <FormField
                    placeholder="Expiration Date"
                    onChange={e => setAlcoholLicenseExpiration(e.target.value)}
                    value={alcoholLicenseExpiration}
                  />
                </form>
              );

            case 4:
              return (
                <form className={s.partner_form_fields}>
                  <FormField
                    placeholder="Delivery"
                    onChange={e => setDoesDelivery(e.target.value)}
                    value={doesDelivery}
                  />
                  <FormField
                    placeholder="Delivery Distance"
                    onChange={e => setDeliveryRadius(e.target.value)}
                    value={deliveryRadius}
                  />
                  <FormField
                    placeholder="Online Store (if any)"
                    onChange={e => setOnlineStore(e.target.value)}
                    value={onlineStore}
                  />
                </form>
              );
          }
        })()}

        <div className={s.buttons}>
          {(() => {
            switch (formStage) {
              case 1:
                return (
                  <Link to="/">
                    <Button type="Secondary" text="Return Home" />
                  </Link>
                );
              case 2:
                return (
                  <Button
                    type="Secondary"
                    onClick={e => setFormStage(1)}
                    text="Go Back"
                  />
                );
              case 3:
                return (
                  <Button
                    type="Secondary"
                    onClick={e => setFormStage(2)}
                    text="Go Back"
                  />
                );
              case 4:
                return (
                  <Button
                    type="Secondary"
                    onClick={e => setFormStage(3)}
                    text="Go Back"
                  />
                );
            }
          })()}

          {(() => {
            switch (formStage) {
              case 1:
                return (
                  <Button
                    type="Primary"
                    onClick={e => setFormStage(2)}
                    text="Next"
                  />
                );
              case 2:
                return (
                  <Button
                    type="Primary"
                    onClick={e => setFormStage(3)}
                    text="Next"
                  />
                );
              case 3:
                return (
                  <Button
                    type="Primary"
                    onClick={e => setFormStage(4)}
                    text="Next"
                  />
                );
              case 4:
                return (
                  <Button
                    type="Primary"
                    onClick={e => createNewVendor()}
                    text="Add My Bar"
                  />
                );
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(VendorSignupForm);
