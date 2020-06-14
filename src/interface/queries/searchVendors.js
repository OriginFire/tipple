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
import Image from '../../data/models/Image';
import Availability from '../../data/models/Availability';
import AvailabilitySchedule from '../../data/models/AvailabilitySchedule';
import Shift from '../../data/models/Shift';
import SearchVendorInputType from '../types/SearchVendorInputType';
import { ScheduleHour } from '../../data/models';

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

    var start = process.hrtime()
    console.log(pickupCheck, deliveryCheck);

    const vendors = await Vendor.findAll({
      where: {
        [Op.or]: [
          {
            [Op.and]: [
              { doesDelivery: deliveryCheck },
              {
                deliveryRadius: {
                  [Op.gte]: 0,
                },
              },
            ],
          },
          {
            [Op.and]: [
              { doesPickup: pickupCheck },
              { latitude: { [Op.between]: [minLat, maxLat] } },
              { longitude: { [Op.between]: [minLong, maxLong] } },
            ],
          },
        ],
      },
      include: [
        { model: Cocktail, as: 'cocktails', include: [{ model: Image }] },
        {
          model: Availability,
          include: [
            { model: AvailabilitySchedule, include: [{ model: Shift }] },
          ],
        },
        { model: Image },
      ],
    });

    var end = process.hrtime(start);
    console.log('query time: ' + end);
    start = process.hrtime()
    vendors.forEach(v => {
      // v.Availabilities.map(availability => {
      //   availability.AvailabilitySchedules.forEach(daySchedule => {
      //     let hours = []
      //     daySchedule.ScheduleHours.map(hour => {
      //       hours.push(hour.hour);
      //     });
      //     // console.log(hours);
      //     return hours;
      //   });
      //   return availability;
      // });
    });
    end = process.hrtime(start);
    console.log('Execution time: ' + end);
    return vendors;
  },
};

export default searchVendors;
