import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLList as List,
  GraphQLNonNull as NonNull,
} from 'graphql';
import AvailabilityScheduleType from './AvailabilityScheduleType';

const AvailabilityType = new ObjectType({
  name: 'Availability',
  fields: {
    id: { type: new NonNull(ID) },
    availabilityType: { type: StringType },
    AvailabilitySchedules: { type: List(AvailabilityScheduleType) },
  },
});

export default AvailabilityType;
