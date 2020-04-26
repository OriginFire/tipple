import {
  GraphQLInputObjectType as ObjectType,
  GraphQLFloat as FloatType,
} from 'graphql';

const SearchVendorProximity = new ObjectType({
  name: 'SearchVendorProximity',
  fields: {
    userLatitude: { type: FloatType },
    userLongitude: { type: FloatType },
  },
});

export default SearchVendorProximity;
