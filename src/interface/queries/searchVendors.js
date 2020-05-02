/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import VendorType from '../types/VendorType';
import Vendor from '../../data/models/Vendor';
import Cocktail from '../../data/models/Cocktail';
import SearchVendorInputType from '../types/SearchVendorInputType';

const searchVendors = {
  type: List(VendorType),
  args: {
    latLng: { type: SearchVendorInputType },
  },
  async resolve(value, {vendor}) {
    let vendors = await Vendor.findAll({
      include: [{ model: Cocktail, as: 'cocktails' }],
    });

    vendors.forEach(v => {
      v.vendorImage = v.vendorImage.toString();
      v.cocktails.forEach(c => {
        c.image = c.image.toString();
      });
    });
    return vendors;
  },
};

export default searchVendors;

/*    let vendors;
// Bar.findNearest() -- this needs to be postgisr
vendors = Vendor.findNearest();
vendors.mapToDelivery; // set opts = input address is within distance */
