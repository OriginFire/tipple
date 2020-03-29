import withStyles from 'isomorphic-style-loader/withStyles';
import React, { useState } from 'react';
import { useMutation } from 'graphql-hooks';
import s from './PartnerForm.scss';
import FormField from '../formField/FormField';
import PrimaryButton from "../../displayComponents/buttonComponents/primaryButton/PrimaryButton";
import SecondaryButton from "../../displayComponents/buttonComponents/secondaryButton/SecondaryButton";
import Link from '../../utilityComponents/link/Link';

const CREATE_BAR_MUTATION = `
  mutation CreateBar($dbaName: String!, $pointOfContact: String!, $emailAddress: String!, $phoneNumber: String!, $physicalStreetAddress: String!, $physicalCity: String!, $physicalState: String!, $physicalZipCode: String!) {
    newBar(bar:{dbaName: $dbaName, pointOfContact: $pointOfContact, emailAddress: $emailAddress, phoneNumber: $phoneNumber, physicalStreetAddress: $physicalStreetAddress, physicalCity: $physicalCity, physicalState: $physicalState, physicalZipCode: $physicalZipCode}) {
      id
      dbaName
      pointOfContact
      emailAddress
      phoneNumber
      physicalStreetAddress
      physicalCity
      physicalState
      physicalZipCode

    }
  }
`;

/** "CreateBar could be anything
 * "newbar calls newBar.js mutator, which is also identified in the schema.js
 * */

function PartnerForm() {
  const [dbaName, setDbaName] = useState('');
  const [pointOfContact, setPointOfContact] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [physicalStreetAddress, setPhysicalStreetAddress] = useState('');
  const [physicalCity, setPhysicalCity] = useState('');
  const [physicalState, setPhysicalState] = useState('');
  const [physicalZipCode, setPhysicalZipCode] = useState('');

  const [createBar] = useMutation(CREATE_BAR_MUTATION);

  async function createNewBar() {
    await createBar({ variables: { dbaName, pointOfContact, emailAddress, phoneNumber, physicalStreetAddress, physicalCity, physicalState, physicalZipCode } });
  }
  return (
    <div className={s.partner_content}>
      <h1 className={s.partner_text}>
        List your cocktail delivery or takeout business on Tipple.
      </h1>
      <div className={s.partner_form}>
        <div className={s.partner_form_fields}>
          <FormField
            placeholder="Business Name"
            onChange={e => setDbaName(e.target.value)}
          />
          <FormField
            placeholder="Point of Contact"
            onChange={e => setPointOfContact(e.target.value)}
          />
          <FormField
            placeholder="Email Address"
            onChange={e => setEmailAddress(e.target.value)}
          />
          <FormField
            placeholder="Phone Number"
            onChange={e => setPhoneNumber(e.target.value)}
          />
          <FormField
            placeholder="Street Address"
            onChange={e => setPhysicalStreetAddress(e.target.value)}
          />
          <FormField
            placeholder="City"
            onChange={e => setPhysicalCity(e.target.value)}
          />
          <FormField
            placeholder="State"
            onChange={e => setPhysicalState(e.target.value)}
            size="Small"
          />
          <FormField
            placeholder="Zip Code"
            onChange={e => setPhysicalZipCode(e.target.value)}
            size="Medium" />
          <FormField placeholder="Alcohol License #" />
          <FormField placeholder="Issuing Agency" />
          <FormField placeholder="Expires" size="Medium" />
        </div>
        <div>
          <PrimaryButton onClick={createNewBar} text={"Add My Bar"} />
          <Link to="/">
            <SecondaryButton text={"Return Home"}/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(PartnerForm);
