import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Vendor.scss';
import VendorDisplay from "../../components/vendorDisplay/VendorDisplay";


class Vendor extends React.Component {
  render() {
    return (
      <VendorDisplay className={s.vendor_page} id={this.props.id} />
    );
  }
}

export default withStyles(s)(Vendor);
