import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './VendorAdmin.scss';
import VendorAdminDisplay from "../../components/vendorAdminComponents/vendorAdminGeneral/VendorAdminGeneral";

class VendorAdmin extends React.Component {
  render() {
    return (
      <VendorAdminDisplay pathId={this.props.pathId} />
    );
  }
}

export default withStyles(s)(VendorAdmin);
