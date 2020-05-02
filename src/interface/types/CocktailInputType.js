import {
  GraphQLInputObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLFloat as FloatType,
} from 'graphql';

const CocktailInputType = new ObjectType({
  name: 'CocktailInput',
  fields: {
    slug: { type: StringType },
    vendorSlug: { type: StringType },
    name: { type: StringType },
    ingredients: { type: StringType },
    price: { type: FloatType },
    servingSize: { type: FloatType },
    profile: { type: StringType },
    image: { type: StringType },
  },
});

export default CocktailInputType;
