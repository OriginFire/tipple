
import DataType from 'sequelize';
import Model from '../sequelize';

const PointOfContact = Model.define('PointOfContact', {
  name: {
    type: DataType.STRING,
  },

  email: {
    type: DataType.STRING,
  },

  phone: {
    type: DataType.STRING,
  },
});

export default PointOfContact;
