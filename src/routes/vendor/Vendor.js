import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './Vendor.scss';
import IndividualVendorDisplay from '../../components/searchResultComponents/individualVendorDisplay/IndividualVendorDisplay';

class Vendor extends React.Component {
  render() {
    return (
      <IndividualVendorDisplay
        className={s.vendor_page}
        slug={this.props.slug}
      />
    );
  }
}

export default withStyles(s)(Vendor);
