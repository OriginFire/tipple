import bcrypt from 'bcrypt';
import db from '../dbSimulator/Vendors';
import Vendor from '../models/Vendor';
import User from '../models/User';
import Cocktail from '../models/Cocktail';
import Availability from '../models/Availability';
import AvailabilitySchedule from '../models/AvailabilitySchedule';
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
  if (!vendor.availability) {
    console.log("It's a trap");
  }
  console.log('Rendering availability hash');
  let availabilitySettings = [];
  vendor.availability.map(type => {
    const newAvailability = {
      availabilityType: type.availabilityType,
      AvailabilitySchedules: scheduleHash(type.availabilityDaysAndTimes),
    };
    availabilitySettings.push(newAvailability);
  });
  console.log(availabilitySettings, "availability settings returned");
  return availabilitySettings;
}

function scheduleHash(availabilityDaysAndTimes) {
  let daysAndTimes = [];
  availabilityDaysAndTimes.map(schedule => {
    const daySchedule = {
      day: schedule.day,
      hours: schedule.hours,
    };
    daysAndTimes.push(daySchedule);
  });
  console.log(daysAndTimes, "daysAndTimes returned");
  return daysAndTimes;
}

function deleteExisting(existingVendors) {
  existingVendors.map(v => {
    console.log(`Destoring vendor with ${v.id}`);
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
      doesPickup: vendor.doesPickup,
      deliveryRadius: vendor.deliveryRadius,
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
        { model: Availability,
          include: [{ model: AvailabilitySchedule }],
        },
        { model: Cocktail, as: 'cocktails' },
        { model: User },
      ], // this is needed to make the Users initial entry work.
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
