import {
  GraphQLInputObjectType as ObjectType,
  GraphQLFloat as FloatType,
  GraphQLBoolean as BooleanType,
} from 'graphql';

const SearchVendorInputType = new ObjectType({
  name: 'SearchVendorProximity',
  fields: {
    userLatitude: { type: FloatType },
    userLongitude: { type: FloatType },
    doesDelivery: { type: BooleanType },
    doesPickup: { type: BooleanType },
  },
});

export default SearchVendorInputType;
