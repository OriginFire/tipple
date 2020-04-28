import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './VendorLogin.scss';
import VendorLoginForm from "../../components/formComponents/vendorLogin/VendorLogin";

class VendorLogin extends React.Component {
  render() {
    return(
      <VendorLoginForm />
    )
  }
}

export default withStyles(s)(VendorLogin);
