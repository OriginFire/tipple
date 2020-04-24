import {
  GraphQLInputObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLBoolean as BooleanType,
  GraphQLInt as IntegerType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const VendorInputType = new ObjectType({
  name: 'VendorInput',
  fields: {
    barId: { type: StringType },
    dbaName: { type: StringType },
    adminName: { type: StringType },
    adminEmail: { type: StringType },
    adminPhone: { type: StringType },
    physicalStreetAddress: { type: StringType },
    physicalCity: { type: StringType },
    physicalState: { type: StringType },
    physicalZipCode: { type: StringType },
    latitude: { type: IntegerType },
    longitude: { type: IntegerType },
    alcoholLicenseNumber: { type: StringType },
    alcoholLicenseIssuingAgency: { type: StringType },
    alcoholLicenseExpiration: { type: StringType },
    doesDelivery: { type: BooleanType },
    doesPickup: { type: BooleanType },
    deliveryRadius: { type: IntegerType },
    onlineStore: { type: StringType },
    vendorImage: { type: StringType },
  },
});

/** Generally keep this const equal to the VendorType constant from VendorType.js, with the exception of the ID (Line 11) */

export default VendorInputType;
