/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './Partner.scss';
import PartnerForm from '../../components/formComponents/partnerForm/PartnerForm';

class Partner extends React.Component {
  render() {
    return <PartnerForm />;
  }
}

export default withStyles(s)(Partner);
