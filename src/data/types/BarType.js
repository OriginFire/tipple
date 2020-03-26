
import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const BarType = new ObjectType({
  name: 'Bar',
  fields: {
    id: { type: new NonNull(ID) },
    bar_id: { type: StringType },
    dba_name: { type: StringType },
  },
});

export default BarType;
