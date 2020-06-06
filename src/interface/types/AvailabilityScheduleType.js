import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLList as List,
  GraphQLNonNull as NonNull,
} from 'graphql';
import ScheduleHourType from './ScheduleHourType';

const AvailabilityScheduleType = new ObjectType({
  name: 'AvailabilitySchedule',
  fields: {
    id: { type: new NonNull(ID) },
    day: { type: StringType },
    ScheduleHours: { type: List(ScheduleHourType) },
  },
});

export default AvailabilityScheduleType;
