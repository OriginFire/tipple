/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import Image from '../../data/models/Image';
import ImageType from '../types/ImageType';
import ImageSType from '../types/ImageSType';

const getImage = {
  type: ImageType,
  args: {
    image: { type: ImageSType },
  },
  async resolve(value, { image }) {
    let foundImage = await Image.findOne({ where: { id: image.ImageId } });
    foundImage.image = foundImage.image.toString();
    return foundImage;
  },
};

export default getImage;
