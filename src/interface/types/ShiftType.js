import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLInt as IntegerType,
  GraphQLList as List,
  GraphQLNonNull as NonNull,
} from 'graphql';

const ShiftType = new ObjectType({
  name: 'Shift',
  fields: {
    id: { type: new NonNull(ID) },
    startHour: { type: IntegerType },
    endHour: { type: IntegerType },
  },
});

export default ShiftType;
