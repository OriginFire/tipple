import {
  GraphQLInputObjectType as ObjectType,
  GraphQLString as StringType,
} from 'graphql';

const ImageSType = new ObjectType({
  name: 'ImageSearch',
  fields: {
    ImageId: { type: StringType },
  },
});

export default ImageSType;
