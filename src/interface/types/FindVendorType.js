import {
  GraphQLInputObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLBoolean as BooleanType,
  GraphQLInt as IntegerType,
  GraphQLNonNull as NonNull,
  GraphQLFloat as FloatType,
} from 'graphql';

const FindVendorType = new ObjectType({
  name: 'FindVendor',
  fields: {
    slug: { type: StringType },
  },
});

/** Generally keep this const equal to the VendorType constant from VendorType.js, with the exception of the ID (Line 11) */

export default FindVendorType;
