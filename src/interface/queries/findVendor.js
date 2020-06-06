/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import VendorType from '../types/VendorType';
import Vendor from '../../data/models/Vendor';
import FindVendorType from '../types/FindVendorType';

const findVendor = {
  type: VendorType,
  args: {
    vendor: { type: FindVendorType },
  },
  async resolve(value, { vendor }) {
    const displayVendor = await Vendor.findOne({
      where: {slug: vendor.slug},
    });

    displayVendor.vendorImage = displayVendor.vendorImage.toString();
    displayVendor.cocktails.forEach(c => {
      c.image = c.image.toString();
    });
    return displayVendor;
  },
};

export default findVendor;
