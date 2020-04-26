/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from '../sequelize';
import Vendor from './Vendor';
import Cocktail from "./Cocktail";
import User from "./User";

Vendor.hasMany(Cocktail, {
  foreignKey: 'vendorId',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

Vendor.hasMany(User, {
  foreignKey: 'vendorId',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { Vendor, Cocktail, User };
