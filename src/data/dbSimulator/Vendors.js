import weekdays from '../../consts/weekdays';

export default [
  {
    id: 'thegibson',
    dbaName: 'the Gibson',
    legalEntityName: 'Soul Haven LLC',
    adminPassword: 'test1',

    adminName: 'Fox Mulder',
    adminPhoneNumber: '555 555 5555',
    adminEmail: 'test1',

    physicalAddress: '2009 14th St NW, Washington, DC, 20009',
    physicalStreetAddress: '2009 14th St NW',
    physicalCity: 'Washington, DC',
    physicalState: 'District of Columbia',
    physicalZipCode: '20009',
    latitude: 38.917351,
    longitude: -77.031639,

    alcoholLicenseNumber:
      '555555-555555' /** Format restrictions based on issuing agency */,
    alcoholLicenseIssuingAgency:
      'ABRA' /** Should standardize entries with a dropdown menu */,
    alcoholLicenseExpiration:
      '04/03/2020' /** Format restrictions based on issuing agency */,
    doesDelivery: false,
    doesPickup: false,
    deliveryRadius: 0,
    onlineStore: 'www.nipplesupply.com',
    vendorImage: '../../../Urbana.jpg',
    cocktails: [
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../LevitationAspect.JPG',
        price: 5.5,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'stiff',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../GoldenDark.jpg',
        price: 9,
        servingSize: 6,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'long',
      },
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../Tipple Bottles.jpg',
        price: 5.5,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'strong',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../Urbana.jpg',
        price: 12,
        servingSize: 5,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'lowABV',
      },
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../LevitationAspect.JPG',
        price: 7,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'strong',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../TomCat.jpg',
        price: 5.5,
        servingSize: 2.25,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'stiff',
      },
    ],
    availability: [
      {
        availabilityType: 'pickup',
        availabilityDaysAndTimes: [
          {
            day: weekdays.sunday,
            hours: [0, 1, 2, 3],
          },
          {
            day: weekdays.monday,
            hours: [],
          },
          {
            day: weekdays.tuesday,
            hours: [],
          },
          {
            day: weekdays.wednesday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.thursday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.friday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.saturday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },

      {
        availabilityType: 'delivery',
        availabilityDaysAndTimes: [
          {
            day: weekdays.sunday,
            hours: [0, 1, 2, 3],
          },
          {
            day: weekdays.monday,
            hours: [],
          },
          {
            day: weekdays.tuesday,
            hours: [],
          },
          {
            day: weekdays.wednesday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.thursday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.friday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.saturday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },
    ],
  },

  {
    id: 'urbana',
    dbaName: 'Urbana',
    legalEntityName: 'Soul Haven LLC',
    adminPassword: 'test',

    adminName: 'Fox Mulder',
    adminPhoneNumber: '555 555 5555',
    adminEmail: 'test',

    physicalAddress: '2009 14th St NW, Washington, DC, 20009',
    physicalStreetAddress: '2009 14th St NW',
    physicalCity: 'Washington, DC',
    physicalState: 'District of Columbia',
    physicalZipCode: '20009',
    latitude: 38.909850,
    longitude: -77.047420,

    alcoholLicenseNumber:
      '555555-555555' /** Format restrictions based on issuing agency */,
    alcoholLicenseIssuingAgency:
      'ABRA' /** Should standardize entries with a dropdown menu */,
    alcoholLicenseExpiration:
      '04/03/2020' /** Format restrictions based on issuing agency */,
    doesDelivery: false,
    doesPickup: false,
    deliveryRadius: 0,
    onlineStore: 'www.nipplesupply.com',
    vendorImage: '../../../Golden.jpg',
    cocktails: [
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../LevitationAspect.JPG',
        price: 8,
        servingSize: 3,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../GoldenDark.jpg',
        price: 6,
        servingSize: 6,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'long',
      },
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../Tipple Bottles.jpg',
        price: 4.5,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'strong',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../Urbana.jpg',
        price: 15.5,
        servingSize: 5,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here. It needs to be sufficiently long to convey character.',
        profile: 'lowABV',
      },
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../LevitationAspect.JPG',
        price: 12,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'strong',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../TomCat.jpg',
        price: 8,
        servingSize: 2.25,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
    ],
    availability: [
      {
        availabilityType: 'pickup',
        availabilityDaysAndTimes: [
          {
            day: weekdays.sunday,
            hours: [0, 1, 2, 3],
          },
          {
            day: weekdays.monday,
            hours: [],
          },
          {
            day: weekdays.tuesday,
            hours: [],
          },
          {
            day: weekdays.wednesday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.thursday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.friday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.saturday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },

      {
        availabilityType: 'delivery',
        availabilityDaysAndTimes: [
          {
            day: weekdays.sunday,
            hours: [0, 1, 2, 3],
          },
          {
            day: weekdays.monday,
            hours: [],
          },
          {
            day: weekdays.tuesday,
            hours: [],
          },
          {
            day: weekdays.wednesday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.thursday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.friday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.saturday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },
    ],
  },

  {
    id: 'revelershour',
    dbaName: "Reveler's Hour",
    legalEntityName: 'Soul Haven LLC',
    adminPassword: 'best',

    adminName: 'Fox Mulder',
    adminPhoneNumber: '555 555 5555',
    adminEmail: 'best',

    physicalAddress: '2009 14th St NW, Washington, DC, 20009',
    physicalStreetAddress: '2009 14th St NW',
    physicalCity: 'Washington, DC',
    physicalState: 'District of Columbia',
    physicalZipCode: '20009',
    latitude: 38.923580,
    longitude: -77.042190,

    alcoholLicenseNumber:
      '555555-555555' /** Format restrictions based on issuing agency */,
    alcoholLicenseIssuingAgency:
      'ABRA' /** Should standardize entries with a dropdown menu */,
    alcoholLicenseExpiration:
      '04/03/2020' /** Format restrictions based on issuing agency */,
    doesDelivery: false,
    doesPickup: false,
    deliveryRadius: 0,
    onlineStore: 'www.nipplesupply.com',
    vendorImage: '../../../SL.jpeg',
    cocktails: [
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../LevitationAspect.JPG',
        price: 8,
        servingSize: 3,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../GoldenDark.jpg',
        price: 6,
        servingSize: 6,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'long',
      },
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../Tipple Bottles.jpg',
        price: 4.5,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'strong',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../Urbana.jpg',
        price: 15.5,
        servingSize: 5,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here. It needs to be sufficiently long to convey character.',
        profile: 'lowABV',
      },
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../LevitationAspect.JPG',
        price: 12,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'strong',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../TomCat.jpg',
        price: 8,
        servingSize: 2.25,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
    ],
    availability: [
      {
        availabilityType: 'pickup',
        availabilityDaysAndTimes: [
          {
            day: weekdays.sunday,
            hours: [0, 1, 2, 3],
          },
          {
            day: weekdays.monday,
            hours: [],
          },
          {
            day: weekdays.tuesday,
            hours: [],
          },
          {
            day: weekdays.wednesday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.thursday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.friday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.saturday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },

      {
        availabilityType: 'delivery',
        availabilityDaysAndTimes: [
          {
            day: weekdays.sunday,
            hours: [0, 1, 2, 3],
          },
          {
            day: weekdays.monday,
            hours: [],
          },
          {
            day: weekdays.tuesday,
            hours: [],
          },
          {
            day: weekdays.wednesday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.thursday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.friday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.saturday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },
    ],
  },

  {
    id: 'columbiaroom',
    dbaName: 'Columbia Room',
    legalEntityName: 'Soul Haven LLC',
    adminPassword: 'rest',
    adminName: 'Fox Mulder',
    adminPhoneNumber: '555 555 5555',
    adminEmail: 'rest',

    physicalAddress: '2009 14th St NW, Washington, DC, 20009',
    physicalStreetAddress: '2009 14th St NW',
    physicalCity: 'Washington, DC',
    physicalState: 'District of Columbia',
    physicalZipCode: '20009',
    latitude: 38.906441,
    longitude: -77.024658,

    alcoholLicenseNumber:
      '555555-555555' /** Format restrictions based on issuing agency */,
    alcoholLicenseIssuingAgency:
      'ABRA' /** Should standardize entries with a dropdown menu */,
    alcoholLicenseExpiration:
      '04/03/2020' /** Format restrictions based on issuing agency */,
    doesDelivery: false,
    doesPickup: false,
    deliveryRadius: 0,
    onlineStore: 'www.nipplesupply.com',
    vendorImage: '../../../Columbia.jpg',
    cocktails: [
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../LevitationAspect.JPG',
        price: 8,
        servingSize: 3,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../GoldenDark.jpg',
        price: 6,
        servingSize: 6,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'long',
      },
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../Tipple Bottles.jpg',
        price: 4.5,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'strong',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../Urbana.jpg',
        price: 15.5,
        servingSize: 5,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here. It needs to be sufficiently long to convey character.',
        profile: 'lowABV',
      },
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../LevitationAspect.JPG',
        price: 12,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'strong',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../TomCat.jpg',
        price: 8,
        servingSize: 2.25,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
    ],
    availability: [
      {
        availabilityType: 'pickup',
        availabilityDaysAndTimes: [
          {
            day: weekdays.sunday,
            hours: [0, 1, 2, 3],
          },
          {
            day: weekdays.monday,
            hours: [],
          },
          {
            day: weekdays.tuesday,
            hours: [],
          },
          {
            day: weekdays.wednesday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.thursday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.friday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.saturday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },

      {
        availabilityType: 'delivery',
        availabilityDaysAndTimes: [
          {
            day: weekdays.sunday,
            hours: [0, 1, 2, 3],
          },
          {
            day: weekdays.monday,
            hours: [],
          },
          {
            day: weekdays.tuesday,
            hours: [],
          },
          {
            day: weekdays.wednesday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.thursday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.friday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.saturday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },
    ],
  },

  {
    id: 'chezbillysud',
    dbaName: 'Chez Billy Sud',
    legalEntityName: 'Soul Haven LLC',
    adminPassword: 'crest',

    adminName: 'Fox Mulder',
    adminPhoneNumber: '555 555 5555',
    adminEmail: 'crest',

    physicalAddress: '2009 14th St NW, Washington, DC, 20009',
    physicalStreetAddress: '2009 14th St NW',
    physicalCity: 'Washington, DC',
    physicalState: 'District of Columbia',
    physicalZipCode: '20009',
    latitude: 38.903629,
    longitude: -77.060959,

    alcoholLicenseNumber:
      '555555-555555' /** Format restrictions based on issuing agency */,
    alcoholLicenseIssuingAgency:
      'ABRA' /** Should standardize entries with a dropdown menu */,
    alcoholLicenseExpiration:
      '04/03/2020' /** Format restrictions based on issuing agency */,
    doesDelivery: false,
    doesPickup: false,
    deliveryRadius: 0,
    onlineStore: 'www.nipplesupply.com',
    vendorImage: '../../../LevitationAspect.JPG',
    cocktails: [
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../LevitationAspect.JPG',
        price: 8,
        servingSize: 3,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../GoldenDark.jpg',
        price: 6,
        servingSize: 6,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'long',
      },
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../Tipple Bottles.jpg',
        price: 4.5,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'strong',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../Urbana.jpg',
        price: 15.5,
        servingSize: 5,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here. It needs to be sufficiently long to convey character.',
        profile: 'lowABV',
      },
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../LevitationAspect.JPG',
        price: 12,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'strong',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../TomCat.jpg',
        price: 8,
        servingSize: 2.25,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
    ],
    availability: [
      {
        availabilityType: 'pickup',
        availabilityDaysAndTimes: [
          {
            day: weekdays.sunday,
            hours: [0, 1, 2, 3],
          },
          {
            day: weekdays.monday,
            hours: [],
          },
          {
            day: weekdays.tuesday,
            hours: [],
          },
          {
            day: weekdays.wednesday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.thursday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.friday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.saturday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },

      {
        availabilityType: 'delivery',
        availabilityDaysAndTimes: [
          {
            day: weekdays.sunday,
            hours: [0, 1, 2, 3],
          },
          {
            day: weekdays.monday,
            hours: [],
          },
          {
            day: weekdays.tuesday,
            hours: [],
          },
          {
            day: weekdays.wednesday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.thursday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.friday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.saturday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },
    ],
  },

  {
    id: 'silverlyan',
    dbaName: 'Silver Lyan',
    legalEntityName: 'Soul Haven LLC',
    adminPassword: 'west',

    adminName: 'Fox Mulder',
    adminPhoneNumber: '555 555 5555',
    adminEmail: 'west',

    physicalAddress: '2009 14th St NW, Washington, DC, 20009',
    physicalStreetAddress: '2009 14th St NW',
    physicalCity: 'Washington, DC',
    physicalState: 'District of Columbia',
    physicalZipCode: '20009',
    latitude: 38.897138,
    longitude: -77.024348,

    alcoholLicenseNumber:
      '555555-555555' /** Format restrictions based on issuing agency */,
    alcoholLicenseIssuingAgency:
      'ABRA' /** Should standardize entries with a dropdown menu */,
    alcoholLicenseExpiration:
      '04/03/2020' /** Format restrictions based on issuing agency */,
    doesDelivery: false,
    doesPickup: false,
    deliveryRadius: 0,
    onlineStore: 'www.nipplesupply.com',
    vendorImage: '../../../SL.jpeg',
    cocktails: [
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../LevitationAspect.JPG',
        price: 8,
        servingSize: 3,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../GoldenDark.jpg',
        price: 6,
        servingSize: 6,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'long',
      },
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../Tipple Bottles.jpg',
        price: 4.5,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'strong',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../Urbana.jpg',
        price: 15.5,
        servingSize: 5,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here. It needs to be sufficiently long to convey character.',
        profile: 'lowABV',
      },
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../LevitationAspect.JPG',
        price: 12,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'strong',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../TomCat.jpg',
        price: 8,
        servingSize: 2.25,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
    ],
    availability: [
      {
        availabilityType: 'pickup',
        availabilityDaysAndTimes: [
          {
            day: weekdays.sunday,
            hours: [0, 1, 2, 3],
          },
          {
            day: weekdays.monday,
            hours: [],
          },
          {
            day: weekdays.tuesday,
            hours: [],
          },
          {
            day: weekdays.wednesday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.thursday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.friday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.saturday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },

      {
        availabilityType: 'delivery',
        availabilityDaysAndTimes: [
          {
            day: weekdays.sunday,
            hours: [0, 1, 2, 3],
          },
          {
            day: weekdays.monday,
            hours: [],
          },
          {
            day: weekdays.tuesday,
            hours: [],
          },
          {
            day: weekdays.wednesday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.thursday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.friday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.saturday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },
    ],
  },

  {
    id: 'badsaint',
    dbaName: 'Bad Saint',
    legalEntityName: 'Soul Haven LLC',
    adminPassword: 'lest',

    adminName: 'Fox Mulder',
    adminPhoneNumber: '555 555 5555',
    adminEmail: 'lest',

    physicalAddress: '2009 14th St NW, Washington, DC, 20009',
    physicalStreetAddress: '2009 14th St NW',
    physicalCity: 'Washington, DC',
    physicalState: 'District of Columbia',
    physicalZipCode: '20009',
    latitude: 38.930287,
    longitude: -77.028104,

    alcoholLicenseNumber:
      '555555-555555' /** Format restrictions based on issuing agency */,
    alcoholLicenseIssuingAgency:
      'ABRA' /** Should standardize entries with a dropdown menu */,
    alcoholLicenseExpiration:
      '04/03/2020' /** Format restrictions based on issuing agency */,
    doesDelivery: false,
    doesPickup: false,
    deliveryRadius: 0,
    onlineStore: 'www.nipplesupply.com',
    vendorImage: '../../../OldFashioned.png',
    cocktails: [
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../LevitationAspect.JPG',
        price: 8,
        servingSize: 3,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../GoldenDark.jpg',
        price: 6,
        servingSize: 6,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'long',
      },
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../Tipple Bottles.jpg',
        price: 4.5,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'strong',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../Urbana.jpg',
        price: 15.5,
        servingSize: 5,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here. It needs to be sufficiently long to convey character.',
        profile: 'lowABV',
      },
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: '../../../LevitationAspect.JPG',
        price: 12,
        servingSize: 3,
        description:
          'A lengthy-ish bit of text explaining the flavor profile of the cocktail should go here.',
        profile: 'strong',
      },
      {
        id: 'gibson_vieux_carre',
        name: 'Vieux Carre',
        ingredients:
          'Rye Whiskey, Brandy, Benedictine, Sweet Vermouth, Angostura Bitters, Peychauds Bitters',
        image: '../../../TomCat.jpg',
        price: 8,
        servingSize: 2.25,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
    ],
    availability: [
      {
        availabilityType: 'pickup',
        availabilityDaysAndTimes: [
          {
            day: weekdays.sunday,
            hours: [0, 1, 2, 3],
          },
          {
            day: weekdays.monday,
            hours: [],
          },
          {
            day: weekdays.tuesday,
            hours: [],
          },
          {
            day: weekdays.wednesday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.thursday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.friday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.saturday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },

      {
        availabilityType: 'delivery',
        availabilityDaysAndTimes: [
          {
            day: weekdays.sunday,
            hours: [0, 1, 2, 3],
          },
          {
            day: weekdays.monday,
            hours: [],
          },
          {
            day: weekdays.tuesday,
            hours: [],
          },
          {
            day: weekdays.wednesday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.thursday,
            hours: [16, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.friday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
          {
            day: weekdays.saturday,
            hours: [12, 13, 0, 1, 2, 3, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24],
          },
        ],
      },
    ],
  },
];
