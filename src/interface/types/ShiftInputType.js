import {
  GraphQLInputObjectType as ObjectType,
  GraphQLInt as IntegerType,
  GraphQLString as StringType,
} from 'graphql';

const ShiftInputType = new ObjectType({
  name: 'ShiftInput',
  fields: {
    JWT: { type: StringType },
    scheduleId: { type: StringType },
    id: { type: StringType },
    startHour: { type: IntegerType },
    endHour: { type: IntegerType },
  },
});

export default ShiftInputType;
