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
  },
});

export default BarInputType;
