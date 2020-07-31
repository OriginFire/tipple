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
    doesDelivery: true,
    deliveryRadius: 1,
    scheduledDeliveryRequired: false,
    minimumDeliveryFulfillment: 0,
    doesPickup: true,
    scheduledPickupRequired: false,
    minimumPickupFulfillment: 0,
    onlineStore: 'www.nipplesupply.com',
    vendorImage: './images/Urbana.jpg',
    cocktails: [
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: './images/LevitationAspect.JPG',
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
        image: './images/GoldenDark.jpg',
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
        image: './images/Tipple Bottles.jpg',
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
        image: './images/Urbana.jpg',
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
        image: './images/LevitationAspect.JPG',
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
        image: './images/TomCat.jpg',
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
        availabilitySchedules: [
          {
            day: weekdays.sunday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
            ],
          },
          {
            day: weekdays.monday,
            shifts: [],
          },
          {
            day: weekdays.tuesday,
            shifts: [],
          },
          {
            day: weekdays.wednesday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.thursday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.friday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.saturday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
        ],
      },

      {
        availabilityType: 'delivery',
        availabilitySchedules: [
          {
            day: weekdays.sunday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
            ],
          },
          {
            day: weekdays.monday,
            shifts: [],
          },
          {
            day: weekdays.tuesday,
            shifts: [],
          },
          {
            day: weekdays.wednesday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.thursday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.friday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.saturday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
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
    latitude: 38.90985,
    longitude: -77.04742,

    alcoholLicenseNumber:
      '555555-555555' /** Format restrictions based on issuing agency */,
    alcoholLicenseIssuingAgency:
      'ABRA' /** Should standardize entries with a dropdown menu */,
    alcoholLicenseExpiration:
      '04/03/2020' /** Format restrictions based on issuing agency */,
    doesDelivery: true,
    deliveryRadius: 3,
    scheduledDeliveryRequired: false,
    minimumDeliveryFulfillment: 2,
    doesPickup: false,
    scheduledPickupRequired: false,
    minimumPickupFulfillment: 0,
    onlineStore: 'www.nipplesupply.com',
    vendorImage: './images/Golden.jpg',
    cocktails: [
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: './images/LevitationAspect.JPG',
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
        image: './images/GoldenDark.jpg',
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
        image: './images/Tipple Bottles.jpg',
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
        image: './images/Urbana.jpg',
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
        image: './images/LevitationAspect.JPG',
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
        image: './images/TomCat.jpg',
        price: 8,
        servingSize: 2.25,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
    ],
    availability: [
      {
        availabilityType: 'pickup',
        availabilitySchedules: [
          {
            day: weekdays.sunday,
            shifts: [],
          },
          {
            day: weekdays.monday,
            shifts: [],
          },
          {
            day: weekdays.tuesday,
            shifts: [],
          },
          {
            day: weekdays.wednesday,
            shifts: [],
          },
          {
            day: weekdays.thursday,
            shifts: [],
          },
          {
            day: weekdays.friday,
            shifts: [],
          },
          {
            day: weekdays.saturday,
            shifts: [],
          },
        ],
      },
      {
        availabilityType: 'delivery',
        availabilitySchedules: [
          {
            day: weekdays.sunday,
            shifts: [
              {
                startHour: 12,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.monday,
            shifts: [],
          },
          {
            day: weekdays.tuesday,
            shifts: [],
          },
          {
            day: weekdays.wednesday,
            shifts: [
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.thursday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.friday,
            shifts: [
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 19,
              },
            ],
          },
          {
            day: weekdays.saturday,
            shifts: [],
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
    latitude: 38.92358,
    longitude: -77.04219,

    alcoholLicenseNumber:
      '555555-555555' /** Format restrictions based on issuing agency */,
    alcoholLicenseIssuingAgency:
      'ABRA' /** Should standardize entries with a dropdown menu */,
    alcoholLicenseExpiration:
      '04/03/2020' /** Format restrictions based on issuing agency */,
    doesDelivery: false,
    deliveryRadius: 0,
    scheduledDeliveryRequired: false,
    minimumDeliveryFulfillment: 0,
    doesPickup: true,
    scheduledPickupRequired: false,
    minimumPickupFulfillment: 0,
    onlineStore: 'www.nipplesupply.com',
    vendorImage: './images/SL.jpeg',
    cocktails: [
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: './images/LevitationAspect.JPG',
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
        image: './images/GoldenDark.jpg',
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
        image: './images/Tipple Bottles.jpg',
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
        image: './images/Urbana.jpg',
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
        image: './images/LevitationAspect.JPG',
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
        image: './images/TomCat.jpg',
        price: 8,
        servingSize: 2.25,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
    ],
    availability: [
      {
        availabilityType: 'pickup',
        availabilitySchedules: [
          {
            day: weekdays.sunday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
            ],
          },
          {
            day: weekdays.monday,
            shifts: [],
          },
          {
            day: weekdays.tuesday,
            shifts: [],
          },
          {
            day: weekdays.wednesday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.thursday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.friday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.saturday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
        ],
      },
      {
        availabilityType: 'delivery',
        availabilitySchedules: [
          {
            day: weekdays.sunday,
            shifts: [],
          },
          {
            day: weekdays.monday,
            shifts: [],
          },
          {
            day: weekdays.tuesday,
            shifts: [],
          },
          {
            day: weekdays.wednesday,
            shifts: [],
          },
          {
            day: weekdays.thursday,
            shifts: [],
          },
          {
            day: weekdays.friday,
            shifts: [],
          },
          {
            day: weekdays.saturday,
            shifts: [],
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
    longitude: -77658,

    alcoholLicenseNumber:
      '555555-555555' /** Format restrictions based on issuing agency */,
    alcoholLicenseIssuingAgency:
      'ABRA' /** Should standardize entries with a dropdown menu */,
    alcoholLicenseExpiration:
      '04/03/2020' /** Format restrictions based on issuing agency */,
    doesDelivery: true,
    deliveryRadius: 2,
    scheduledDeliveryRequired: true,
    minimumDeliveryFulfillment: 1,
    doesPickup: true,
    scheduledPickupRequired: false,
    minimumPickupFulfillment: 0,
    onlineStore: 'www.nipplesupply.com',
    vendorImage: './images/Columbia.jpg',
    cocktails: [
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: './images/LevitationAspect.JPG',
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
        image: './images/GoldenDark.jpg',
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
        image: './images/Tipple Bottles.jpg',
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
        image: './images/Urbana.jpg',
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
        image: './images/LevitationAspect.JPG',
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
        image: './images/TomCat.jpg',
        price: 8,
        servingSize: 2.25,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
    ],
    availability: [
      {
        availabilityType: 'pickup',
        availabilitySchedules: [
          {
            day: weekdays.sunday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
            ],
          },
          {
            day: weekdays.monday,
            shifts: [],
          },
          {
            day: weekdays.tuesday,
            shifts: [],
          },
          {
            day: weekdays.wednesday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.thursday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.friday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.saturday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
        ],
      },

      {
        availabilityType: 'delivery',
        availabilitySchedules: [
          {
            day: weekdays.sunday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
            ],
          },
          {
            day: weekdays.monday,
            shifts: [],
          },
          {
            day: weekdays.tuesday,
            shifts: [],
          },
          {
            day: weekdays.wednesday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.thursday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.friday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.saturday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
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
    deliveryRadius: 0,
    scheduledDeliveryRequired: false,
    minimumDeliveryFulfillment: 0,
    doesPickup: true,
    scheduledPickupRequired: false,
    minimumPickupFulfillment: 0,
    onlineStore: 'www.nipplesupply.com',
    vendorImage: './images/LevitationAspect.JPG',
    cocktails: [
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: './images/LevitationAspect.JPG',
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
        image: './images/GoldenDark.jpg',
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
        image: './images/Tipple Bottles.jpg',
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
        image: './images/Urbana.jpg',
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
        image: './images/LevitationAspect.JPG',
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
        image: './images/TomCat.jpg',
        price: 8,
        servingSize: 2.25,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
    ],
    availability: [
      {
        availabilityType: 'pickup',
        availabilitySchedules: [
          {
            day: weekdays.sunday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
            ],
          },
          {
            day: weekdays.monday,
            shifts: [],
          },
          {
            day: weekdays.tuesday,
            shifts: [],
          },
          {
            day: weekdays.wednesday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.thursday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.friday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.saturday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
        ],
      },
      {
        availabilityType: 'delivery',
        availabilitySchedules: [
          {
            day: weekdays.sunday,
            shifts: [],
          },
          {
            day: weekdays.monday,
            shifts: [],
          },
          {
            day: weekdays.tuesday,
            shifts: [],
          },
          {
            day: weekdays.wednesday,
            shifts: [],
          },
          {
            day: weekdays.thursday,
            shifts: [],
          },
          {
            day: weekdays.friday,
            shifts: [],
          },
          {
            day: weekdays.saturday,
            shifts: [],
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
    longitude: -77348,

    alcoholLicenseNumber:
      '555555-555555' /** Format restrictions based on issuing agency */,
    alcoholLicenseIssuingAgency:
      'ABRA' /** Should standardize entries with a dropdown menu */,
    alcoholLicenseExpiration:
      '04/03/2020' /** Format restrictions based on issuing agency */,
    doesDelivery: true,
    deliveryRadius: 4,
    scheduledDeliveryRequired: false,
    minimumDeliveryFulfillment: 2,
    doesPickup: true,
    scheduledPickupRequired: false,
    minimumPickupFulfillment: 0,
    onlineStore: 'www.nipplesupply.com',
    vendorImage: './images/SL.jpeg',
    cocktails: [
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: './images/LevitationAspect.JPG',
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
        image: './images/GoldenDark.jpg',
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
        image: './images/Tipple Bottles.jpg',
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
        image: './images/Urbana.jpg',
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
        image: './images/LevitationAspect.JPG',
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
        image: './images/TomCat.jpg',
        price: 8,
        servingSize: 2.25,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
    ],
    availability: [
      {
        availabilityType: 'pickup',
        availabilitySchedules: [
          {
            day: weekdays.sunday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
            ],
          },
          {
            day: weekdays.monday,
            shifts: [],
          },
          {
            day: weekdays.tuesday,
            shifts: [],
          },
          {
            day: weekdays.wednesday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.thursday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.friday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.saturday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
        ],
      },

      {
        availabilityType: 'delivery',
        availabilitySchedules: [
          {
            day: weekdays.sunday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
            ],
          },
          {
            day: weekdays.monday,
            shifts: [],
          },
          {
            day: weekdays.tuesday,
            shifts: [],
          },
          {
            day: weekdays.wednesday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.thursday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.friday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.saturday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
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
    deliveryRadius: 0,
    scheduledDeliveryRequired: false,
    minimumDeliveryFulfillment: 0,
    doesPickup: true,
    scheduledPickupRequired: true,
    minimumPickupFulfillment: 1,
    onlineStore: 'www.nipplesupply.com',
    vendorImage: './images/OldFashioned.png',
    cocktails: [
      {
        id: 'gibsonoldfashioned',
        name: 'Old Fashioned',
        ingredients: 'Rye Whiskey, Simple Syrup, Old Fashioned Bitters',
        image: './images/LevitationAspect.JPG',
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
        image: './images/GoldenDark.jpg',
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
        image: './images/Tipple Bottles.jpg',
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
        image: './images/Urbana.jpg',
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
        image: './images/LevitationAspect.JPG',
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
        image: './images/TomCat.jpg',
        price: 8,
        servingSize: 2.25,
        description: 'A lengthy-ish bit of text explaining the flavor profile.',
        profile: 'stiff',
      },
    ],
    availability: [
      {
        availabilityType: 'pickup',
        availabilitySchedules: [
          {
            day: weekdays.sunday,
            shifts: [
              {
                startHour: 0,
                endHour: 2,
              },
            ],
          },
          {
            day: weekdays.monday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.tuesday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.wednesday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.thursday,
            shifts: [
              {
                startHour: 15,
                endHour: 23,
              },
            ],
          },
          {
            day: weekdays.friday,
            shifts: [
              {
                startHour: 14,
                endHour: 18,
              },
            ],
          },
          {
            day: weekdays.saturday,
            shifts: [
              {
                startHour: 12,
                endHour: 16,
              },
              {
                startHour: 18,
                endHour: 23,
              },
            ],
          },
        ],
      },
      {
        availabilityType: 'delivery',
        availabilitySchedules: [
          {
            day: weekdays.sunday,
            shifts: [],
          },
          {
            day: weekdays.monday,
            shifts: [],
          },
          {
            day: weekdays.tuesday,
            shifts: [],
          },
          {
            day: weekdays.wednesday,
            shifts: [],
          },
          {
            day: weekdays.thursday,
            shifts: [],
          },
          {
            day: weekdays.friday,
            shifts: [],
          },
          {
            day: weekdays.saturday,
            shifts: [],
          },
        ],
      },
    ],
  },
];
