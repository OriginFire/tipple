import DataType, { NUMBER } from 'sequelize';
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

    hours: {
      type: DataType.ARRAY(DataType.NUMBER),
    },
  },
  {
    indexes: [{ fields: ['id'] }],
  },
);

export default AvailabilitySchedule;
