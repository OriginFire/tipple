/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import BarType from '../types/BarType';
import Bar from '../models/Bar';
import PointOfContact from '../models/PointOfContact';
import Address from '../models/Address';
import License from '../models/License';
import BarInputType from '../types/BarInputType';

const newBar = {
  type: BarType,
  args: {
    bar: { type: BarInputType },
  },
  resolve(value, { bar }) {
    const b = Bar.create({
      barId: bar.barId,
      dbaName: bar.dbaName,
    });
    return b;
  },
};

export default newBar;
