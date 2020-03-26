import DataType from 'sequelize';
import Model from '../sequelize';

const License = Model.define('License', {
  license_number: {
    type: DataType.STRING,
  },

  issuing_agency: {
    type: DataType.STRING,
  },

  expiration: {
    type: DataType.STRING,
  },
});

export default License;
