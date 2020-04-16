import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './VendorAdmin.scss';
import VendorAdminDisplay from "../../components/vendorAdminComponents/vendorAdmin/VendorAdminDisplay";

class VendorAdmin extends React.Component {
  render() {
    return (
      <VendorAdminDisplay id={this.props.id} />
    );
  }
}

export default withStyles(s)(VendorAdmin);
