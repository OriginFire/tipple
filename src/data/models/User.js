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

import bcrypt from 'bcrypt';

const User = Model.define(
  'User',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    username: {
      type: DataType.STRING(255),
    },

    password: {
      type: DataType.STRING(255),
      defaultValue: false,
    },
  },
  {
    indexes: [{ fields: ['username'] }],
  },
);

User.authenticate = async function(username, password) {

  let user = await User.findOne({ where: { username: username } });
    console.log('user found');

  // bcrypt is a one-way hashing algorithm that allows us to
  // store strings on the database rather than the raw
  // passwords. Check out the docs for more detail
  if (bcrypt.compareSync(password, user.password)) {
    return user;
  }

  throw "Unable to Authenticate";
};

export default User;
