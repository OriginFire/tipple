import db from '../dbSimulator/Vendors'
import bcrypt from "bcrypt";
import Vendor from "../models/Vendor";
import User from "../models/User";
import Cocktail from "../models/Cocktail";

var fs = require('fs');

function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
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

function seedData() {
  db.map( vendor => {
    const slug = stringToSlug(vendor.dbaName);
    const hash = bcrypt.hashSync(vendor.adminPassword, 10);

    const cocktailHash = vendor.cocktails.map(cocktail => {
      // ../../../LevitationAspect.JPG  => ./public/LevitationAspect.JPG
      const cocktailImageUrl = cocktail.image.replace("../../../", "./public/");

      return {
        ...cocktail,
        image: base64_encode(cocktailImageUrl)
      };
    });
    const vendorImageUrl = vendor.vendorImage.replace("../../../", "./public/");

    Vendor.create(
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
        alcoholLicenseIssuingAgency:
        vendor.alcoholLicenseIssuingAgency,
        alcoholLicenseExpiration: vendor.alcoholLicenseExpiration,
        doesDelivery: vendor.doesDelivery,
        doesPickup: vendor.doesPickup,
        deliveryRadius: vendor.deliveryRadius,
        vendorImage: base64_encode(vendorImageUrl),
        Users: [
          {
            name: vendor.adminName,
            email: vendor.adminEmail,
            phone: vendor.adminPhoneNumber,
            password: hash,
          },
        ],
        Cocktails: cocktailHash,
      },
      {
        include: [User, Cocktail], // this is needed to make the Users initial entry work.
      },
    );
  });
}

export default seedData;
