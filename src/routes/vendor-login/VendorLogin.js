import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './VendorLogin.scss';
import FormField from "../../components/sitewideDisplayComponents/formField";

class VendorLogin extends React.Component {
  render() {
    console.log(this.context);

    return (
      <div className={s.login_form}>
        <div>{this.context.contextTest}</div>
        <FormField placeholder={"User Email Address"} type={"text"}/>
        <FormField placeholder={"User Password"} type={"password"} />
      </div>
    );
  }
}

export default withStyles(s)(VendorLogin);
