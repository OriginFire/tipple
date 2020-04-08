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
import s from './Header.scss';
import Link from '../../utilityComponents/link/Link';
import Logo from '../../../../public/Tipple_WoC_Reduced.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <Link className={s.brand} to="/">
          <img src={Logo} className={s.logo} alt="Tipple Supply Co" />
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(Header);
