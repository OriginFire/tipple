
import {
  GraphQLInputObjectType  as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const BarInputType = new ObjectType({
  name: 'BarInput',
  fields: {
    bar_id: { type: StringType },
    dba_name: { type: StringType },
  },
});

export default BarInputType;
