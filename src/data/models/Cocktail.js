import DataType from 'sequelize';
import Model from '../sequelize';
import stringToSlug from '../../utils/stringToSlug';

const Cocktail = Model.define(
  'Cocktail',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    slug: {
      type: DataType.STRING(256),
    },

    name: {
      type: DataType.STRING(512),
    },

    ingredients: {
      type: DataType.STRING(512),
    },

    price: {
      type: DataType.DOUBLE(512),
    },

    servingSize: {
      type: DataType.DOUBLE,
    },

    profile: {
      type: DataType.STRING(512),
    },

    description: {
      type: DataType.STRING(200),
    },

    image: {
      type: DataType.BLOB('long'),
    },
  },
  {
    indexes: [{ fields: ['id', 'slug'] }],
  },
);

Cocktail.beforeCreate(async (cocktail, options) => {
  cocktail.slug=stringToSlug(`${cocktail.name}`);
});

Cocktail.beforeUpdate(async (cocktail, options) => {
  cocktail.slug=stringToSlug(`${cocktail.name}`);
});

export default Cocktail;
