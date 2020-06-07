import bcrypt from 'bcrypt';
import db from '../dbSimulator/Vendors';
import Vendor from '../models/Vendor';
import User from '../models/User';
import Cocktail from '../models/Cocktail';
import Availability from '../models/Availability';
import AvailabilitySchedule from '../models/AvailabilitySchedule';
import ScheduleHour from '../models/ScheduleHour';
import stringToSlug from '../../utils/stringToSlug';

import weekdays from '../../consts/weekdays';

const fs = require('fs');

function base64_encode(file) {
  // read binary data
  const bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  const bytes = new Buffer(bitmap).toString('base64');
  return `data:image/jpg;base64,${bytes}`;
}

function cocktailHash(vendor) {
  return vendor.cocktails.map(cocktail => {
    // ../../../LevitationAspect.JPG  => ./public/LevitationAspect.JPG
    const cocktailImageUrl = cocktail.image.replace('../../../', './public/');
    const cocktailSlug = stringToSlug(`${vendor.dbaName}-${cocktail.name}`);

    return {
      slug: cocktailSlug,
      name: cocktail.name,
      ingredients: cocktail.ingredients,
      price: cocktail.price,
      servingSize: cocktail.servingSize,
      profile: cocktail.profile,
      description: cocktail.description,
      image: base64_encode(cocktailImageUrl),
    };
  });
}

function availabilityHash(vendor) {
  const availabilitySettings = [];
  vendor.availability.map(type => {
    const newAvailability = {
      availabilityType: type.availabilityType,
      AvailabilitySchedules: scheduleHash(type.availabilityDaysAndTimes),
    };
    availabilitySettings.push(newAvailability);
  });
  return availabilitySettings;
}

function scheduleHash(availabilityDaysAndTimes) {
  const daysAndTimes = [];
  availabilityDaysAndTimes.map(schedule => {
    const daySchedule = {
      day: schedule.day,
      ScheduleHours: schedule.hours.map(h => {
        return { hour: h };
      }), // [0,4,5] [{hour: 0}, {hour: 4}, {hour:5}]
    };
    daysAndTimes.push(daySchedule);
  });
  return daysAndTimes;
}

function deleteExisting(existingVendors) {
  existingVendors.map(v => {
    console.log(`Destroying vendor with ${v.id}`);
    Vendor.destroy({ where: { id: v.id } });
  });
}

function createNew(vendor) {
  const vendorImageUrl = vendor.vendorImage.replace('../../../', './public/');
  const hash = bcrypt.hashSync(vendor.adminPassword, 10);

  const v = Vendor.create(
    {
      dbaName: vendor.dbaName,
      legalEntityName: vendor.legalEntityName,
      physicalAddress: vendor.physicalAddress,
      physicalStreetAddress: vendor.physicalStreetAddress,
      physicalCity: vendor.physicalCity,
      physicalState: vendor.physicalState,
      physicalZipCode: vendor.physicalZipCode,
      latitude: vendor.latitude,
      longitude: vendor.longitude,
      alcoholLicenseNumber: vendor.alcoholLicenseNumber,
      alcoholLicenseIssuingAgency: vendor.alcoholLicenseIssuingAgency,
      alcoholLicenseExpiration: vendor.alcoholLicenseExpiration,
      doesDelivery: vendor.doesDelivery,
      scheduledDeliveryRequired: vendor.scheduledDeliveryRequired,
      minimumDeliveryFulfillment: vendor.minimumDeliveryFulfillment,
      doesPickup: vendor.doesPickup,
      scheduledPickupRequired: vendor.scheduledPickupRequired,
      minimumPickupFulfillment: vendor.minimumPickupFilfillment,
      deliveryRadius: vendor.deliveryRadius,
      deliveryLngMax: vendor.longitude + vendor.deliveryRadius / 69,
      deliveryLngMin: vendor.longitude - vendor.deliveryRadius / 69,
      deliveryLatMax: vendor.latitude + vendor.deliveryRadius / 69,
      deliveryLatMin: vendor.latitude - vendor.deliveryRadius / 69,
      onlineStore: vendor.onlineStore,
      vendorImage: base64_encode(vendorImageUrl),
      cocktails: cocktailHash(vendor),
      Availabilities: availabilityHash(vendor),
      Users: [
        {
          name: vendor.adminName,
          email: vendor.adminEmail,
          phone: vendor.adminPhoneNumber,
          password: hash,
        },
      ],
    },
    {
      include: [
        {
          model: Availability,
          include: [
            {
              model: AvailabilitySchedule,
              include: [
                {
                  model: ScheduleHour,
                },
              ],
            },
          ],
        },
        { model: Cocktail, as: 'cocktails' },
        { model: User },
      ],
    },
  );
}

function seedData() {
  db.map(vendor => {
    Vendor.findAll({ where: { dbaName: vendor.dbaName } })
      .then(existing => {
        deleteExisting(existing);
      })
      .then(() => {
        createNew(vendor);
      });
  });
}

export default seedData;
