import sequelize from '../sequelize';
import Vendor from './Vendor';
import Cocktail from './Cocktail';
import User from './User';
import Availability from './Availability';
import AvailabilitySchedule from './AvailabilitySchedule';
import ScheduleHour from './ScheduleHour';
import seedData from '../seed/seedDbSimulator';

Vendor.hasMany(User, { onDelete: 'cascade' });
User.belongsTo(Vendor);

Vendor.hasMany(Cocktail, { as: 'cocktails', onDelete: 'cascade' });
Cocktail.belongsTo(Vendor);

Vendor.hasMany(Availability, { onDelete: 'cascade' });
Availability.belongsTo(Vendor);

Availability.hasMany(AvailabilitySchedule, { onDelete: 'cascade' });
AvailabilitySchedule.belongsTo(Availability);

AvailabilitySchedule.hasMany(ScheduleHour, { onDelete: 'cascade' });
ScheduleHour.belongsTo(AvailabilitySchedule);

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
  ScheduleHour,
};
