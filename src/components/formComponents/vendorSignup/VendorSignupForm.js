import withStyles from 'isomorphic-style-loader/withStyles';
import React, { useState } from 'react';
import { useMutation } from 'graphql-hooks';
import s from './VendorSignupForm.scss';
import FormField from '../../sitewideDisplayComponents/formField/FormField';
import Button from '../../sitewideDisplayComponents/Button/Button';
import Link from '../../utilityComponents/link/Link';

const CREATE_BAR_MUTATION = `
  mutation CreateBar($dbaName: String!,
  $pointOfContact: String!,
  $emailAddress: String!,
  $phoneNumber: String!,
  $physicalStreetAddress: String!,
  $physicalCity: String!,
  $physicalState: String!,
  $physicalZipCode: String!,
  $alcoholLicenseNumber: String!,
  $alcoholLicenseIssuingAgency: String!,
  $alcoholLicenseExpiration: String!,
  $doesDelivery: String!
  $deliveryRadius: String!
  $onlineOrdering: String!)
  {
    newBar(bar:{
    dbaName: $dbaName,
    pointOfContact: $pointOfContact,
    emailAddress: $emailAddress,
    phoneNumber: $phoneNumber,
    physicalStreetAddress: $physicalStreetAddress,
    physicalCity: $physicalCity,
    physicalState: $physicalState,
    physicalZipCode: $physicalZipCode,
    alcoholLicenseNumber: $alcoholLicenseNumber,
    alcoholLicenseIssuingAgency: $alcoholLicenseIssuingAgency,
    alcoholLicenseExpiration: $alcoholLicenseExpiration,
    doesDelivery: $doesDelivery
    deliveryRadius: $deliveryRadius
    onlineOrdering: $onlineOrdering}) {
      id
      dbaName
      pointOfContact
      emailAddress
      phoneNumber
      physicalStreetAddress
      physicalCity
      physicalState
      physicalZipCode
      alcoholLicenseNumber
      alcoholLicenseIssuingAgency
      alcoholLicenseExpiration
      doesDelivery
      deliveryRadius
      onlineOrdering
    }
  }
`;

/** "CreateBar could be anything
 * "newbar calls newBar.js mutator, which is also identified in the schema.js
 * */

function VendorSignupForm() {
  const [dbaName, setDbaName] = useState('');
  const [pointOfContact, setPointOfContact] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [entityName, setEntityName] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');
  const [physicalStreetAddress, setPhysicalStreetAddress] = useState('');
  const [physicalCity, setPhysicalCity] = useState('');
  const [physicalState, setPhysicalState] = useState('');
  const [physicalZipCode, setPhysicalZipCode] = useState('');
  const [alcoholLicenseNumber, setAlcoholLicenseNumber] = useState('');
  const [alcoholLicenseIssuingAgency, setAlcoholLicenseIssuingAgency] = useState('');
  const [alcoholLicenseExpiration, setAlcoholLicenseExpiration] = useState('');
  const [doesDelivery, setDoesDelivery] = useState('');
  const [deliveryRadius, setDeliveryRadius] = useState('');
  const [onlineOrdering, setOnlineOrdering] = useState('');
  const [formStage, setFormStage] = useState(1);

  const [createBar] = useMutation(CREATE_BAR_MUTATION);

  async function createNewBar() {
    await createBar({
      variables: {
        dbaName,
        pointOfContact,
        emailAddress,
        phoneNumber,
        physicalStreetAddress,
        physicalCity,
        physicalState,
        physicalZipCode,
        alcoholLicenseNumber,
        alcoholLicenseIssuingAgency,
        alcoholLicenseExpiration,
        doesDelivery,
        deliveryRadius,
        onlineOrdering,
      },
    });
  }

  return (
    <div className={s.partner_content}>
      <h1 className={s.partner_text}>
        List your cocktail delivery or takeout business on Tipple.
      </h1>
      <div className={s.partner_form}>
        <div className={s.form_area}>
          {/* eslint-disable-next-line consistent-return */}
          {(() => {
            // eslint-disable-next-line default-case
            switch (formStage) {
              case 1:
                return (
                  <form className={s.partner_form_fields}>
                    <FormField
                      placeholder="Full Name"
                      onChange={e => setPointOfContact(e.target.value)}
                      type="text"
                      value={pointOfContact}
                    />
                    <FormField
                      placeholder="Email Address"
                      onChange={e => setEmailAddress(e.target.value)}
                      type="email"
                      value={emailAddress}
                    />
                    <FormField
                      placeholder="Password"
                      onChange={e => setPassword(e.target.value)}
                      type="password"
                      value={password}
                    />
                    <FormField
                      placeholder="Phone Number"
                      onChange={e => setPhoneNumber(e.target.value)}
                      type="tel"
                      value={phoneNumber}
                      pattern="([0-9]{3})-[0-9]{3}-[0-9]{4}"
                    />
                  </form>
                );

              case 2:
                return (
                  <form className={s.partner_form_fields}>
                    <FormField
                      placeholder="Bar Name (D.B.A.)"
                      onChange={e => setDbaName(e.target.value)}
                      type="text"
                      value={dbaName}
                    />
                    <FormField
                      placeholder="Entity Name"
                      onChange={e => setEntityName(e.target.value)}
                      type="text"
                      value={entityName}
                    />
                    <FormField
                      placeholder="Address of Venue"
                      onChange={e => setPhysicalAddress(e.target.value)}
                      type="text"
                      value={physicalAddress}
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
                      onChange={e => setAlcoholLicenseIssuingAgency(e.target.value)}
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
                      onChange={e => setOnlineOrdering(e.target.value)}
                      value={onlineOrdering}
                    />
                  </form>
                );
            }
          })()}
        </div>

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

        <div className={s.buttons}>
          {(() => {
            switch (formStage) {
              case 1:
                return (
                  <Link to="/">
                    <Button type={"Secondary"} text="Return Home" />
                  </Link>
                );
              case 2:
                return (
                  <Button type={"Secondary"}
                    onClick={e => setFormStage(1)}
                    text="Go Back"
                  />
                );
              case 3:
                return (
                  <Button type={"Secondary"}
                    onClick={e => setFormStage(2)}
                    text="Go Back"
                  />
                );
              case 4:
                return (
                  <Button type={"Secondary"} onClick={e => setFormStage(3)} text="Go Back"/>
                );
            }
          })()}

          {(() => {
            switch (formStage) {
              case 1:
                return (
                  <Button type={"Primary"} onClick={e => setFormStage(2)} text="Next" />
                );
              case 2:
                return (
                  <Button type={"Primary"} onClick={e => setFormStage(3)} text="Next" />
                );
              case 3:
                return (
                  <Button type={"Primary"} onClick={e => setFormStage(4)} text="Next" />
                );
              case 4:
                return (
                  <Button type={"Primary"}
                    onClick={e => createNewBar}
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
