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

const Cocktail = Model.define(
  'Cocktail',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    slug: {
      type: DataType.STRING(256),
    },

    name: {
      type: DataType.STRING(512),
    },

    ingredients: {
      type: DataType.STRING(512),
    },

    price: {
      type: DataType.STRING(512),
    },

    servingSize: {
      type: DataType.DOUBLE,
    },

    profile: {
      type: DataType.STRING(512),
    },

    image: {
      type: DataType.BLOB('long'),
    },
  },
  {
    indexes: [{ fields: ['slug'] }],
  },
);

export default Cocktail;
