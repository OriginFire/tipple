/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import BarType from '../types/BarType';
import Bar from '../models/Bar'
import BarInputType from "../types/BarInputType";

const newBar = {
  type: BarType,
  args: {
    bar: {type: BarInputType}
  },
  resolve(value, { bar} ) {
    let b = Bar.create({
      bar_id: bar.bar_id,
      dba_name: bar.dba_name,
    });
    return (
      b
    );
  },
};

export default newBar;
