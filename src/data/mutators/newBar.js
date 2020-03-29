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
import BarInputType from '../types/BarInputType';
import {GraphQLString as StringType} from "graphql/type/scalars";

const newBar = {
  type: BarType,
  args: {
    bar: { type: BarInputType },
  },
  resolve(value, { bar }) {
   /** console.log('im here'); */
    const b = Bar.create({
      barId: bar.barId,
      dbaName: bar.dbaName,
      pointOfContact: bar.pointOfContact,
      emailAddress: bar.emailAddress,
      phoneNumber: bar.phoneNumber,
      physicalStreetAddress: bar.physicalStreetAddress,
      physicalCity: bar.physicalCity,
      physicalState: bar.physicalState,
      physicalZipCode: bar.physicalZipCode,
    });
    return b;
  },
};

export default newBar;
