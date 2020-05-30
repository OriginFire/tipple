import DataType from 'sequelize';
import Model from '../sequelize';

const ScheduleHour = Model.define(
  'ScheduleHour',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    hour: {
      type: DataType.INTEGER,
    },
  },
  {
    indexes: [{ fields: ['id'] }],
  },
);

export default ScheduleHour;
