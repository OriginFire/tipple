/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Partner from './Partner';
import Layout from '../../components/sitewideDisplayComponents/Layout';

function action() {
  return {
    title: '',
    component: (
      <Layout>
        <Partner />
      </Layout>
    ),
  };
}

export default action;
