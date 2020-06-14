/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import jwt from 'jsonwebtoken';
import VendorType from '../../types/VendorType';
import Vendor from '../../../data/models/Vendor';
import Cocktail from '../../../data/models/Cocktail';
import User from '../../../data/models/User';
import Image from '../../../data/models/Image';
import FindVendorType from '../../types/FindVendorType';
import config from '../../../config';
import {
  Availability,
  AvailabilitySchedule,
  Shift,
} from '../../../data/models';

const protectedFindVendor = {
  type: VendorType,
  args: {
    vendor: { type: FindVendorType },
  },
  async resolve(value, { vendor }) {
    const JWT = jwt.verify(vendor.JWT, config.auth.jwt.secret);

    if (JWT.vendorSlug !== vendor.slug) {
      return 'nope';
    }

    return Vendor.findOne({
      where: { slug: vendor.slug },
      include: [
        { model: Cocktail, as: 'cocktails', include: [{ model: Image }] },
        { model: Image },
        User,
        {
          model: Availability,
          include: [
            { model: AvailabilitySchedule, include: [{ model: Shift }] },
          ],
        },
      ],
    });
  },
};

export default protectedFindVendor;
