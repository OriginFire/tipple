import React, { useState } from 'react';
import withStyles from "isomorphic-style-loader/withStyles";
import s from './VendorLogin.scss';
import FormField from '../../sitewideDisplayComponents/formField';
import Button from '../../sitewideDisplayComponents/Button';
import history from "../../../history";

function VendorLogin() {
  const [vendorAdminEmail, setVendorAdminEmail] = useState('');
  const [vendorAdminPassword, setVendorAdminPassword] = useState('');

  return (
    <div className={s.page_wrapper}>
      <div className={s.form}>
        <div className={s.login_content}>
          <div className={s.explainer}>Log into your vendor account</div>
          <FormField
            placeholder="User Email Address"
            type="text"
            value={vendorAdminEmail}
            onChange={e => {
              setVendorAdminEmail(e.target.value);
            }}
          />
          <FormField
            placeholder="User Password"
            type="password"
            value={vendorAdminPassword}
            onChange={e => {
              setVendorAdminPassword(e.target.value);
            }}
          />
          <Button
            type="Primary"
            text="Log In"
          />
        </div>


        <div className={s.signup_content}>
          <div className={s.redirect_explainer}>Don't have an account?</div>
          <Button
            type="Secondary"
            text="Sign Up Here"
            onClick={e => history.push('/vendor-create')}
          />
        </div>

      </div>
    </div>
  );
};

export default withStyles(s)(VendorLogin);
