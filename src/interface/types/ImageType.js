import {
  GraphQLInputObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const ImageType = new ObjectType({
  name: 'Image',
  fields: {
    image: { type: StringType },
  },
});

export default ImageType;
