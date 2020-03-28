import {
  GraphQLInputObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const BarInputType = new ObjectType({
  name: 'BarInput',
  fields: {
    barId: { type: StringType },
    dbaName: { type: StringType },
    contact: { type: StringType },
  },
});

/** Generally keep this const equal to the BarType constant from BarType.js, with the exception of the ID (Line 11) */

export default BarInputType;
