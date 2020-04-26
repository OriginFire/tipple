import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const CocktailType = new ObjectType({
  name: 'Cocktail',
  fields: {
    /* id: { type: new NonNull(ID) }, */
    id: { type: StringType },
    name: { type: StringType },
    ingredients: { type: StringType },
    image: { type: StringType },
  },
});

export default CocktailType;
