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
import PropTypes from 'prop-types';
import s from './Finder.scss';
import FinderForm from '../../components/formComponents/finderForm/FinderForm';

class Finder extends React.Component {
  render() {
    return <FinderForm />;
  }
}

export default withStyles(s)(Finder);
