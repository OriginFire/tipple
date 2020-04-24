import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './VendorLogin.scss';
import FormField from '../../components/sitewideDisplayComponents/formField';
import Button from '../../components/sitewideDisplayComponents/Button';
import ApplicationContext from '../../components/ApplicationContext';
import history from "../../history";
import db from '../../data/dbSimulator/Vendors';

class VendorLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
    };
    this.authenticateUser = this.authenticateUser.bind(this);
  }

  /* The authenticatedUser variable in the authenticateUser function should be set to the response
  of a graphQL query for objects with matching
   */

  authenticateUser() {
    let authenticatedUser;
    db.map(vendor => {
      if (this.state.userEmail === vendor.adminEmail && this.state.userPassword === vendor.userPassword) {
        authenticatedUser = vendor.id;
      }
    });
    if (authenticatedUser) {
      this.context.context.authenticatedUser = authenticatedUser;
      history.push(`/vendor-admin/${authenticatedUser}`);
    } else {
      console.log("We were unable to find any account matching that username and password.")
    }
  }

  static contextType = ApplicationContext;

  render() {
    return (
      <div className={s.login_form}>
        <div>{this.context.contextTest}</div>
        <FormField
          placeholder="User Email Address"
          type="text"
          value={this.state.userEmail}
          onChange={e => {
            this.setState({ userEmail: e.target.value });
          }}
        />
        <FormField
          placeholder="User Password"
          type="password"
          value={this.state.userPassword}
          onChange={e => {
            this.setState({ userPassword: e.target.value });
          }}
        />

        <Button
          type="Primary"
          text="Log In"
          onClick={this.authenticateUser}
        />
      </div>
    );
  }
}

export default withStyles(s)(VendorLogin);
