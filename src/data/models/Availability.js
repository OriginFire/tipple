import DataType from 'sequelize';
import Model from '../sequelize';

const Availability = Model.define(
  'Availability',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    availabilityType: {
      type: DataType.STRING(256),
    },
  },
  {
    indexes: [{ fields: ['id'] }],
  },
);

export default Availability;
