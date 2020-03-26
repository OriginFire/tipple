import DataType from 'sequelize';
import Model from '../sequelize';

const Delivery = Model.define('Delivery', {
  delivery_settings: {
    makes_deliveries: {
      type: DataType.BOOLEAN,
    },
    distance_from_bar: {
      type: DataType.STRING,
    },
  },
});

export default Delivery;
