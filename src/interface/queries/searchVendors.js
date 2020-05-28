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
import { Op } from 'sequelize';

const searchVendors = {
  type: List(VendorType),
  args: {
    parameters: { type: SearchVendorInputType },
  },
  async resolve(value, { parameters }) {

    const latToMiles = 69.0;
    const defaultDeliveryRadius = 1;
    const deliveryRadius = parameters.deliveryRadius || defaultDeliveryRadius;

    let minLat = parameters.userLatitude - deliveryRadius/latToMiles;
    let maxLat = parameters.userLatitude + deliveryRadius/latToMiles;
    let minLong = parameters.userLongitude - deliveryRadius/latToMiles;
    let maxLong = parameters.userLongitude + deliveryRadius/latToMiles;

    let vendors = await Vendor.findAll({
      where: {
        latitude: {
          [Op.between]: [minLat, maxLat]
        },
        longitude: {
          [Op.between]: [minLong, maxLong]
        },
      },
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
