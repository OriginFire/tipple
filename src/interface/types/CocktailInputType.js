import {
  GraphQLInputObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLFloat as FloatType,
} from 'graphql';

const CocktailInputType = new ObjectType({
  name: 'CocktailInput',
  fields: {
    id: { type: StringType },
    JWT: { type: StringType },
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

export default CocktailInputType;
