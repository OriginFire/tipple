import {
  GraphQLInputObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const UserLoginInput = new ObjectType({
  name: 'UserLoginInput',
  fields: {
    email: { type: StringType },
    password: { type: StringType },
  },
});

export default UserLoginInput;
