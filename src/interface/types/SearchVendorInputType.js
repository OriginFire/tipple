import {
GraphQLInputObjectType as ObjectType,
GraphQLFloat as FloatType,
} from 'graphql';

const SearchVendorInputType = new ObjectType({
  name: 'SearchVendorProximity',
  fields: {
    userLatitude: { type: FloatType },
    userLongitude: { type: FloatType },
  },
});

export default SearchVendorInputType;
