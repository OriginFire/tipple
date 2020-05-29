import {
  GraphQLInputObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLBoolean as BooleanType,
  GraphQLFloat as FloatType,
} from 'graphql';

const VendorInputType = new ObjectType({
  name: 'VendorInput',
  fields: {
    slug: { type: StringType },
    dbaName: { type: StringType },
    JWT: { type: StringType },
    legalEntityName: { type: StringType },
    physicalAddress: { type: StringType },
    latitude: { type: FloatType },
    longitude: { type: FloatType },
    alcoholLicenseNumber: { type: StringType },
    alcoholLicenseIssuingAgency: { type: StringType },
    alcoholLicenseExpiration: { type: StringType },
    doesDelivery: { type: BooleanType },
    deliveryRadius: { type: FloatType },
    doesPickup: { type: BooleanType },
    onlineStore: { type: StringType },
    adminName: { type: StringType },
    adminEmail: { type: StringType },
    adminPhone: { type: StringType },
    adminPassword: { type: StringType },
  },
});

/** Generally keep this const equal to the VendorType constant from VendorType.js, with the exception of the ID (Line 11) */

export default VendorInputType;
