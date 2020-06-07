/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import { Op } from 'sequelize';
import VendorType from '../types/VendorType';
import Vendor from '../../data/models/Vendor';
import Cocktail from '../../data/models/Cocktail';
import Availability from '../../data/models/Availability';
import AvailabilitySchedule from '../../data/models/AvailabilitySchedule';
import SearchVendorInputType from '../types/SearchVendorInputType';
import {ScheduleHour} from "../../data/models";

const searchVendors = {
  type: List(VendorType),
  args: {
    parameters: { type: SearchVendorInputType },
  },
  async resolve(value, { parameters }) {
    const latToMiles = 69;
    const { pickupRadius } = parameters;

    const minLat = parameters.userLatitude - pickupRadius / latToMiles;
    const maxLat = parameters.userLatitude + pickupRadius / latToMiles;
    const minLong = parameters.userLongitude - pickupRadius / latToMiles;
    const maxLong = parameters.userLongitude + pickupRadius / latToMiles;

    let deliveryCheck = 'noise';
    if (parameters.doesDelivery) deliveryCheck = true;

    let pickupCheck = 'noise';
    if (parameters.doesPickup) pickupCheck = true;

    console.log(pickupCheck, deliveryCheck);

    const vendors = await Vendor.findAll({
      where: {
        [Op.or]: [
          {
            [Op.and]: [
              { doesDelivery: deliveryCheck },
              {
                deliveryRadius: {
                  [Op.gte]: 0
                },
              },
            ],
          },
          {
            [Op.and]: [
              { doesPickup: pickupCheck },
              { latitude: {[Op.between]: [minLat, maxLat]}},
              { longitude: {[Op.between]: [minLong, maxLong]}}
            ]
          }
        ],
      },
      include: [
        { model: Cocktail, as: 'cocktails' },
        { model: Availability, include: [
            { model: AvailabilitySchedule, include: [
                { model: ScheduleHour },
              ]},
          ]}],
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
