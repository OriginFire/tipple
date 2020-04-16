import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorAccountSettings.scss';
import Link from '../../utilityComponents/link';
import db from '../../../data/dbSimulator/bars';

class VendorAccountSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>Account Test</div>
    )
  }
}

export default withStyles(s)(VendorAccountSettings);
