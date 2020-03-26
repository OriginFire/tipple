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


// import sequelize from '../sequelize';
import User from './User';
import UserLogin from './UserLogin';
import UserClaim from './UserClaim';
import UserProfile from './UserProfile';

User.hasMany(UserLogin, {
  foreignKey: 'userId',
  as: 'logins',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

User.hasMany(UserClaim, {
  foreignKey: 'userId',
  as: 'claims',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

User.hasOne(UserProfile, {
  foreignKey: 'userId',
  as: 'profile',
  onUpdate: 'cascade',
  onDelete: 'cascade',
});

function sync(...args) {
  return sequelize.sync(...args);
}

export default { sync };
export { Bar, Address, PointOfContact,  User, UserLogin, UserClaim, UserProfile };

//
// function sync(...args) {
//   return sequelize.sync(...args);
// }
//
// export default { sync };
// export { User, UserLogin, UserClaim, UserProfile };
