/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import sequelize from '../sequelize';
import Bar from './Bar';
import Address from './Address'
import PointOfContact from "./PointOfContact";

Bar.hasOne(Address, {
  foreignKey: 'physicalAddressId',
  as: 'physicalAddress',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

Bar.hasOne(Address, {
  foreignKey: 'billingAddressId',
  as: 'billingAddress',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

Bar.hasOne(PointOfContact, {
  foreignKey: 'billingContactId',
  as: 'billingContact',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { Bar, Address, PointOfContact };
