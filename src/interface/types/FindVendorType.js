import {
  GraphQLInputObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const FindVendorType = new ObjectType({
  name: 'FindVendor',
  fields: {
    slug: { type: StringType },
  },
});

export default FindVendorType;
