import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLFloat as FloatType,
  GraphQLNonNull as NonNull,
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
