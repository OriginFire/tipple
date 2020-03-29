import {
  GraphQLInputObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import {GraphQLBoolean as BooleanType} from "graphql/type/scalars";

const BarInputType = new ObjectType({
  name: 'BarInput',
  fields: {
    barId: { type: StringType },
    dbaName: { type: StringType },
    pointOfContact: { type: StringType },
    emailAddress: { type: StringType },
    phoneNumber: { type: StringType },
    physicalStreetAddress: { type: StringType },
    physicalCity: { type: StringType },
    physicalState: { type: StringType },
    physicalZipCode: { type: StringType },
    alcoholLicenseNumber: { type: StringType },
    alcoholLicenseIssuingAgency: { type: StringType },
    alcoholLicenseExpiration: { type: StringType },
    doesDelivery: { type: StringType },
    deliveryRadius: { type: StringType },
    onlineOrdering: { type: StringType },

  },
});

/** Generally keep this const equal to the BarType constant from BarType.js, with the exception of the ID (Line 11) */

export default BarInputType;
