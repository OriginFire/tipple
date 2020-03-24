/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from 'isomorphic-style-loader/useStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Finder.scss';

export default function Admin() {
  useStyles(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>This will be the finder content</h1>
        <p>...</p>
      </div>
    </div>
  );
}
