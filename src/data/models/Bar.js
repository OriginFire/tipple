/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const Bar = Model.define(
  'Bar',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },
    barId: {
      type: DataType.STRING(255),
    },

    contact: {
      type: DataType.STRING(255),
    },

    legalEntity: {
      type: DataType.STRING(255),
      // validate: { isEmail: true },
    },

    dbaName: {
      type: DataType.STRING(255),
    },
  },
  {
    indexes: [{ fields: ['barId'] }],
  },
);

export default Bar;
