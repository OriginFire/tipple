import DataType from 'sequelize';
import bcrypt from 'bcrypt';
import Model from '../sequelize';
import stringToSlug from "../../utils/stringToSlug";

const User = Model.define(
  'User',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    slug: {
      type: DataType.STRING(255),
    },

    name: {
      type: DataType.STRING(255),
    },

    email: {
      type: DataType.STRING(255),
    },

    phone: {
      type: DataType.STRING(255),
    },

    password: {
      type: DataType.STRING(255),
      defaultValue: false,
    },
  },
  {
    indexes: [{ fields: ['id', 'email'] }],
  },
);

User.authenticate = async function(username, password) {
  const user = await User.findOne({ where: { email: username } });
  console.log('user found');

  // bcrypt is a one-way hashing algorithm that allows us to
  // store strings on the database rather than the raw
  // passwords. Check out the docs for more detail
  if (bcrypt.compareSync(password, user.password)) {
    return user;
  }

  throw 'Unable to Authenticate';
};

User.beforeCreate(async (user, options) => {
  user.slug=stringToSlug(`${user.name}-${user.email}`);
});

User.beforeUpdate(async (user, options) => {
  user.slug=stringToSlug(`${user.name}-${user.email}`);
});


export default User;
