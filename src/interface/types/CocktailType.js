import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLFloat as FloatType,

} from 'graphql';

const CocktailType = new ObjectType({
  name: 'Cocktail',
  fields: {
    id: { type: StringType },
    slug: { type: StringType },
    name: { type: StringType },
    ingredients: { type: StringType },
    price: { type: StringType },
    servingSize: { type: FloatType },
    profile: { type: StringType },
    image: { type: StringType },
  },
});

export default CocktailType;
