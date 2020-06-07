import sequelize from '../sequelize';
import Vendor from './Vendor';
import Cocktail from './Cocktail';
import User from './User';
import Availability from './Availability';
import AvailabilitySchedule from './AvailabilitySchedule';
import Shift from './Shift';
import seedData from '../seed/seedDbSimulator';

Vendor.hasMany(User, { onDelete: 'cascade', foreignKeyConstraint: true  });
User.belongsTo(Vendor);

Vendor.hasMany(Cocktail, { as: 'cocktails', onDelete: 'cascade', foreignKeyConstraint: true  });
Cocktail.belongsTo(Vendor);

Vendor.hasMany(Availability, { onDelete: 'cascade', foreignKeyConstraint: true  });
Availability.belongsTo(Vendor);

Availability.hasMany(AvailabilitySchedule, { onDelete: 'cascade', foreignKeyConstraint: true  });
AvailabilitySchedule.belongsTo(Availability);

AvailabilitySchedule.hasMany(Shift, { onDelete: 'cascade', foreignKeyConstraint: true });
Shift.belongsTo(AvailabilitySchedule);

function sync(...args) {
  return sequelize.sync(...args).then(() => {
    seedData();
  });
}

export default { sync };
export {
  Vendor,
  Cocktail,
  User,
  Availability,
  AvailabilitySchedule,
  Shift,
};
