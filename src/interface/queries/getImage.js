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

const getImage = {
  type: ImageType,
  async resolve(value, {image}) {
    return Image.findOne({where: {id: image.ImageId}}).then(image => {image.toString()});
  },
};

export default getImage;
