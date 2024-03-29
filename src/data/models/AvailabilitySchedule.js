import DataType from 'sequelize';
import Model from '../sequelize';

const AvailabilitySchedule = Model.define(
  'AvailabilitySchedule',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    day: {
      type: DataType.STRING(256),
    },
  },
  {
    indexes: [{ fields: ['id'] }],
  },
);

export default AvailabilitySchedule;
