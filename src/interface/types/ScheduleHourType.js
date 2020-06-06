import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLInt as IntegerType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const ScheduleHourType = new ObjectType({
  name: 'ScheduleHourType',
  fields: {
    id: { type: new NonNull(ID) },
    hour: { type: IntegerType },
  },
});

export default ScheduleHourType;
