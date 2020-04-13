/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Vendor from './Vendor';
import Layout from '../../components/sitewideDisplayComponents/Layout';

async function action(route) {
  const id = route.params.id;
  return {
    title: '',
    component: (
      <Layout>
        <Vendor id={id}/>
      </Layout>
    ),
  };
}

export default action;
