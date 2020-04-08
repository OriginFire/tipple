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

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.scss';
import Header from '../Header/Header';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={s.app}>
        <Header />
        <div className={s.mainBody}>{this.props.children}</div>
      </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
