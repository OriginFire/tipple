/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import BarType from '../types/BarType';
import Bar from '../../data/models/Bar'

const searchBars = {
  type: List(BarType),
  resolve() {
    // Bar.findNearest() -- this needs to be postgis
    bars = Bar.findNearest()
    bars.mapToDelivery // set opts = input address is within distance
    return (
      bars
    );
  },
};

export default newBar;
