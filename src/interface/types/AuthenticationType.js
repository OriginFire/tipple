import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const AuthenticationType = new ObjectType({
  name: 'AuthenticationType',
  fields: {
    JWT: { type: StringType },
    vendorSlug: { type: StringType },
    userEmail: { type: StringType },

  },
});

export default AuthenticationType;
