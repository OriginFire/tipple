import bcrypt from 'bcrypt';
import db from '../dbSimulator/Vendors';
import Vendor from '../models/Vendor';
import User from '../models/User';
import Cocktail from '../models/Cocktail';
import Availability from '../models/Availability';
import AvailabilitySchedule from "../models/AvailabilitySchedule";
import weekdays from '../../consts/weekdays';

const fs = require('fs');

function base64_encode(file) {
  // read binary data
  const bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64');
}

function stringToSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaeeeeiiiioooouuuunc------';
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
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

function scheduleHash(availabilityDaysAndTimes) {
  return availabilityDaysAndTimes.map(schedule => {
    return {
      day: schedule.day,
      hours: schedule.hours,
    };
  });
}

function availabilityHash(vendor) {
  if (!vendor.availability) {
    return "It's a trap!";
  }
  return vendor.availability.map(availability => {
    return {
      availabilityType: availability.availabilityType,
      availabilityDaysAndTimes: scheduleHash(
        availability.availabilityDaysAndTimes,
      ),
    };
  });
}

function deleteExisting(existingVendors, slug) {
  existingVendors.map(v => {
    console.log(`Destoring vendor with ${v.id} ${slug}`);
    Vendor.destroy({ where: { id: v.id } });
  });
}

function createNew(vendor, slug) {
  const vendorImageUrl = vendor.vendorImage.replace('../../../', './public/');
  const userSlug = stringToSlug(`${vendor.dbaName}-${vendor.adminName}`);
  const hash = bcrypt.hashSync(vendor.adminPassword, 10);

  const v = Vendor.create(
    {
      slug,
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
      vendorImage: base64_encode(vendorImageUrl),
      cocktails: cocktailHash(vendor),
      availability: availabilityHash(vendor),
      Users: [
        {
          slug: userSlug,
          name: vendor.adminName,
          email: vendor.adminEmail,
          phone: vendor.adminPhoneNumber,
          password: hash,
        },
      ],
    },
    {
      include: [{model: User}, { model: Cocktail, as: 'cocktails' }, Availability], // this is needed to make the Users initial entry work.
    },
  );
  console.log(`created vendor with ${v.id}`);
}

function seedData() {
  db.map(vendor => {
    const slug = stringToSlug(vendor.dbaName);

    Vendor.findAll({ where: { slug } })
      .then(existing => {
        deleteExisting(existing, slug);
      })
      .then(() => {
        createNew(vendor, slug);
      });
  });
}

export default seedData;
