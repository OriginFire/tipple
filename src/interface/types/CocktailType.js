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
    id: { type: new NonNull(ID) },
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
