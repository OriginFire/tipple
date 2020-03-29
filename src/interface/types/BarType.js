import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLBoolean as BooleanType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const BarType = new ObjectType({
  name: 'Bar',
  fields: {
    id: { type: new NonNull(ID) },
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

export default BarType;
