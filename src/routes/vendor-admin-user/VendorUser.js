import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './VendorUser.scss';
import VendorAdminUser from "../../components/vendorAdminComponents/vendorAdminUser/VendorAdminUser";

class VendorUser extends React.Component {
  render() {
    return (
      <VendorAdminUser pathId={this.props.slug}/>
    );
  }
}

export default withStyles(s)(VendorUser);
