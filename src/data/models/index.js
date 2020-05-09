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
import Cocktail from './Cocktail';
import User from './User';
import seedData from '../seed/seedDbSimulator';
import Availability from './Availability';
import AvailabilitySchedule from './AvailabilitySchedule';

Vendor.hasMany(Cocktail, {
  as: 'cocktails',
  onDelete: 'cascade',
});
Cocktail.belongsTo(Vendor);

Vendor.hasMany(User, {
  onDelete: 'cascade',
});
User.belongsTo(Vendor);

Vendor.hasMany(Availability, {
  onDelete: 'cascade',
});
Availability.belongsTo(Vendor);

Availability.hasMany(AvailabilitySchedule, {
  onDelete: 'cascade',
});
AvailabilitySchedule.belongsTo(Availability);

function sync(...args) {
  return sequelize.sync(...args).then(() => {
    seedData();
  });
}

export default { sync };
export { Vendor, Cocktail, User, AvailabilitySchedule };
