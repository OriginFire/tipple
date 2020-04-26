import {
  GraphQLInputObjectType as ObjectType,
  GraphQLInt as IntegerType,
} from 'graphql';

const SearchVendorProximity = new ObjectType({
  name: 'SearchVendorProximity',
  fields: {
    userLatitude: { type: IntegerType },
    userLongitude: { type: IntegerType },
  },
});

export default SearchVendorProximity;
