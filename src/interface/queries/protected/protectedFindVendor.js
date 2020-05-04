/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import VendorType from '../../types/VendorType';
import Vendor from '../../../data/models/Vendor';
import Cocktail from '../../../data/models/Cocktail';
import FindVendorType from '../../types/FindVendorType';
import jwt from 'jsonwebtoken';
import config from '../../../config';

const findVendor = {
  type: VendorType,
  args: {
    vendor: { type: FindVendorType },
  },
  async resolve(value, { vendor }) {
    const JWT = jwt.verify(vendor.JWT, config.auth.jwt.secret);
    console.log(JWT);

    if (JWT.vendorSlug !== vendor.slug) {
      return 'nope';
    }

    const displayVendor = await Vendor.findOne({
      where: { slug: vendor.slug },
      include: [{ model: Cocktail, as: 'cocktails' }],
    });

    displayVendor.cocktails.forEach(c => {
      c.image = c.image.toString();
    });
    return displayVendor;
  },
};

export default findVendor;
