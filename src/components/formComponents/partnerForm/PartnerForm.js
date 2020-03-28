import withStyles from 'isomorphic-style-loader/withStyles';
import React, { useState } from 'react';
import { useMutation } from 'graphql-hooks';
import s from './PartnerForm.scss';
import FormField from '../formField/FormField';
import PrimaryButton from "../../displayComponents/buttonComponents/primaryButton/PrimaryButton";
import SecondaryButton from "../../displayComponents/buttonComponents/secondaryButton/SecondaryButton";
import Link from '../../utilityComponents/link/Link';

const CREATE_BAR_MUTATION = `
  mutation CreateBar($dbaName: String!, $contact: String!) {
    newBar(bar:{dbaName: $dbaName, contact: $contact}) {
      id
      dbaName
      contact
    }
  }
`;

/** "CreateBar could be anything
 * "newbar calls newBar.js mutator, which is also identified in the schema.js
 * */

function PartnerForm() {
  const [dbaName, setDbaName] = useState('');
  const [contact, setContact] = useState('');

  const [createBar] = useMutation(CREATE_BAR_MUTATION);

  async function createNewBar() {
    await createBar({ variables: { dbaName, contact } });
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
            onChange={e => setContact(e.target.value)}
          />
          <FormField placeholder="Email Address" />
          <FormField placeholder="Phone Number" />
          <FormField placeholder="Street Address" />
          <FormField placeholder="City" />
          <FormField placeholder="State" size="Small" />
          <FormField placeholder="Zip Code" size="Medium" />
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
