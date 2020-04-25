import {
  GraphQLInputObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLBoolean as BooleanType,
  GraphQLInt as IntegerType,
  GraphQLNonNull as NonNull,
  GraphQLFloat as FloatType,
} from 'graphql';

const VendorInputType = new ObjectType({
  name: 'VendorInput',
  fields: {
    dbaName: { type: StringType },
    legalEntityName: { type: StringType },
    physicalAddress: { type: StringType },
    alcoholLicenseNumber: { type: StringType },
    alcoholLicenseIssuingAgency: { type: StringType },
    alcoholLicenseExpiration: { type: StringType },
    deliveryRadius: { type: StringType },
    adminName: { type: StringType },
    adminEmail: { type: StringType },
    adminPhone: { type: StringType },
    adminPassword: { type: StringType },
  },
});

/** Generally keep this const equal to the VendorType constant from VendorType.js, with the exception of the ID (Line 11) */

export default VendorInputType;
