import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './PartnerForm.scss';
import FormField from '../formField/FormField';
import SubmitButton from '../../displayComponents/buttonComponents/submitButton/SubmitButton';
import Link from '../../utilityComponents/link/Link';
import GoBackButton from '../../displayComponents/buttonComponents/goBackButton/GoBackButton';

class PartnerForm extends React.Component {
  render() {
    return (
      <div className={s.partner_content}>
        <h1 className={s.partner_text}>
          We need some information about your business to proceed.
        </h1>
        <div className={s.partner_form}>
          <div className={s.partner_form_fields}>
            <FormField placeholder="Business Name" />
            <FormField placeholder="Point of Contact" />
            <FormField placeholder="Email Address" />
            <FormField placeholder="Phone Number" />
            <FormField placeholder="Street Address" />
            <FormField placeholder="City" />
            <FormField placeholder="State" />
            <FormField placeholder="Zip Code" />
            <FormField placeholder="Alcohol License Number" />
            <FormField placeholder="Expiration Date" />
            <FormField placeholder="Issuing Agency" />
          </div>
          <div>
            <SubmitButton />
            <Link to="/">
              <GoBackButton />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(PartnerForm);
