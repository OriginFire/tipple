import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLList as List,
  GraphQLNonNull as NonNull,
} from 'graphql';
import ShiftType from './ShiftType';

const AvailabilityScheduleType = new ObjectType({
  name: 'AvailabilitySchedule',
  fields: {
    id: { type: new NonNull(ID) },
    day: { type: StringType },
    Shifts: { type: List(ShiftType) },
  },
});

export default AvailabilityScheduleType;
