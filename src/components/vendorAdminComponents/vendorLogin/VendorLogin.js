import React, { useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation } from 'graphql-hooks';
import jwt from 'jsonwebtoken';
import s from './VendorLogin.scss';
import FormField from '../../sitewideDisplayComponents/formField';
import Button from '../../sitewideDisplayComponents/Button';
import history from '../../../history';
import ApplicationContext from '../../ApplicationContext';
import ContentBox from '../../sitewideDisplayComponents/contentBox/ContentBox';

const VENDOR_LOGIN_MUTATION = `
  mutation VendorLogin(
    $vendorAdminEmail: String!,
    $vendorAdminPassword: String!,
  ) {
    vendorLogin( user: {
        email: $vendorAdminEmail,
        password: $vendorAdminPassword,
      }
    ) {
      JWT
    }
  }
`;

function VendorLogin() {
  const authenticationContext = useContext(ApplicationContext);
  const [cookies, setCookie] = useCookies(['jwt']);

  const [login] = useMutation(VENDOR_LOGIN_MUTATION);

  const [vendorAdminEmail, setVendorAdminEmail] = useState('');
  const [vendorAdminPassword, setVendorAdminPassword] = useState('');

  const onClickLogin = () => {
    login({
      variables: { vendorAdminEmail, vendorAdminPassword },
    }).then(data => {
      if (data.data.vendorLogin) {
        authenticationContext.context.JWT = data.data.vendorLogin.JWT;
        setCookie('jwt', data.data.vendorLogin.JWT);
        const decoded = jwt.decode(data.data.vendorLogin.JWT);
        history.push(`/vendor-admin/${decoded.vendorSlug}`);
      } else {
        console.log("We were unable to find an account with that email address and password.")
      }
    });
  };

  const passwordKeyed = event => {
    if (event.key === 'Enter') {
      onClickLogin();
    }
  };

  return (
    <ContentBox>
      <div className={s.form} onKeyPress={e => passwordKeyed(e)}>
        <div className={s.login_content}>
          <div className={s.explainer}>Log into your vendor account</div>
          <FormField
            placeholder="User Email Address"
            type="email"
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
          <Button type="Primary" text="Log In" onClick={e => onClickLogin()} />
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
    </ContentBox>
  );
}

export default withStyles(s)(VendorLogin);
