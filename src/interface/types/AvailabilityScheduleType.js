import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLList as List,
  GraphQLInt as IntegerType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const AvailabilityScheduleType = new ObjectType({
  name: 'AvailabilitySchedule',
  fields: {
    id: { type: new NonNull(ID) },
    day: { type: StringType },
    hours: { type: List(IntegerType) },
  },
});

export default AvailabilityScheduleType;
