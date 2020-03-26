
import DataType from 'sequelize';
import Model from '../sequelize';

const Address = Model.define('Address', {
  street_adress: {
    type: DataType.STRING,
  },

  city: {
    type: DataType.STRING,
  },

  state: {
    type: DataType.STRING,
  },

  zip_code: {
    type: DataType.STRING,
  },
});

export default Address;
