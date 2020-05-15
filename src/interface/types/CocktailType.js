import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLFloat as FloatType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const CocktailType = new ObjectType({
  name: 'Cocktail',
  fields: {
    JWT: { type: StringType },
    id: { type: new NonNull(ID) },
    slug: { type: StringType },
    name: { type: StringType },
    ingredients: { type: StringType },
    price: { type: FloatType },
    servingSize: { type: FloatType },
    profile: { type: StringType },
    description: { type: StringType },
    image: { type: StringType },
  },
});

export default CocktailType;
