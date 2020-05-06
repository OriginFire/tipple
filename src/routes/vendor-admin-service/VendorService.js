import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './VendorService.scss';
import VendorAdminService from "../../components/vendorAdminComponents/vendorAdminService/VendorAdminService";

class VendorService extends React.Component {
  render() {
    return (
      <VendorAdminService pathId={this.props.slug}/>
    );
  }
}

export default withStyles(s)(VendorService);
