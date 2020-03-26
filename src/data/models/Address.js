
import DataType from 'sequelize';
import Model from '../sequelize';

const Address = Model.define('Address', {
  streetAddress: {
    type: DataType.STRING,
  },

  city: {
    type: DataType.STRING,
  },

  state: {
    type: DataType.STRING,
  },

  zipCode: {
    type: DataType.STRING,
  },
});

export default Address;
