import DataType from 'sequelize';
import Model from '../sequelize';

const Shift = Model.define(
  'Shift',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    startHour: {
      type: DataType.INTEGER,
    },

    endHour: {
      type: DataType.INTEGER,
    },
  },
  {
    indexes: [{ fields: ['id'] }],
  },
);

export default Shift;
