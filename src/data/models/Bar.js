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

    dbaName: {
      type: DataType.STRING(255),
    },

    pointOfContact: {
      type: DataType.STRING(255),
    },

    emailAddress: {
      type: DataType.STRING(255),
    },

    phoneNumber: {
      type: DataType.STRING(255),
    },

    physicalStreetAddress: {
      type: DataType.STRING(255),
    },

    physicalCity: {
      type: DataType.STRING(255),
    },

    physicalState: {
      type: DataType.STRING(255),
    },

    physicalZipCode: {
      type: DataType.STRING(255),
    },

    legalEntity: {
      type: DataType.STRING(255),
      // validate: { isEmail: true },
    },

    barId: {
      type: DataType.STRING(255),
    },
  },
  {
    indexes: [{ fields: ['id'] }],
  },
);

export default Bar;
