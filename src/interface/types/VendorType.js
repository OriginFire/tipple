import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLBoolean as BooleanType,
  GraphQLFloat as FloatType,
  GraphQLNonNull as NonNull,
  GraphQLList as List,
} from 'graphql';
import CocktailType from './CocktailType';
import AvailabilityType from './AvailabilityType';

const VendorType = new ObjectType({
  name: 'Vendor',
  fields: {
    id: { type: new NonNull(ID) },
    slug: { type: StringType },
    dbaName: { type: StringType },
    adminName: { type: StringType },
    adminEmail: { type: StringType },
    adminPhone: { type: StringType },
    physicalAddress: { type: StringType },
    physicalStreetAddress: { type: StringType },
    physicalCity: { type: StringType },
    physicalState: { type: StringType },
    physicalZipCode: { type: StringType },
    latitude: { type: FloatType },
    longitude: { type: FloatType },
    alcoholLicenseNumber: { type: StringType },
    alcoholLicenseIssuingAgency: { type: StringType },
    alcoholLicenseExpiration: { type: StringType },
    doesDelivery: { type: BooleanType },
    deliveryRadius: { type: FloatType },
    scheduledDeliveryRequired: { type: BooleanType },
    minimumDeliveryFulfillment: { type: FloatType },
    doesPickup: { type: BooleanType },
    scheduledPickupRequired: { type: BooleanType },
    minimumPickupFulfillment: { type: FloatType },
    deliveryLngMax: { type: FloatType },
    deliveryLngMin: { type: FloatType },
    deliveryLatMax: { type: FloatType },
    deliveryLatMin: { type: FloatType },
    onlineStore: { type: StringType },
    vendorImage: { type: StringType },
    cocktails: { type: List(CocktailType) },
    Availabilities: { type: List(AvailabilityType) },
  },
});

export default VendorType;
