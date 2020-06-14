import DataType from 'sequelize';
import Model from '../sequelize';

const Image = Model.define(
  'Image',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    image: {
      type: DataType.BLOB('long'),
    },
  },
  {
    indexes: [{ fields: ['id'] }],
  },
);

export default Image;
