import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './Vendor.scss';
import IndividualVendorDisplay from "../../components/searchResultComponents/individualVendorDisplay/individualVendorDisplay";


class Vendor extends React.Component {
  render() {
    return (
      <IndividualVendorDisplay className={s.vendor_page} id={this.props.id} />
    );
  }
}

export default withStyles(s)(Vendor);
