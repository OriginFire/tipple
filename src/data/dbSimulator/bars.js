export default [
  {
    id: 'thegibson',
    business_names: {
      legal_entity: 'Soul Haven LLC',
      dba_name: 'The Gibson',
    },
    bussiness_address: {
      physical_address: {
        street_address: '2009 14th St NW',
        city: 'Washington, DC',
        state: 'District of Columbia',
        zip_code: '20009',
      },
      billing_address: {
        street_address: '2009 14th St NW',
        city: 'Washington, DC',
        state: 'District of Columbia',
        zip_code: '20009',
      },
    },
    contact_information: {
      tipple_point_of_contact: {
        name: 'Fox Mulder',
        email: 'email@gmail.com',
        phone: '(207) 555-5555',
      },
      billing_contact: {
        name: 'Dana Scully',
        email: 'xfiles@gmail.com',
        phone: '(202) 555-5555',
      },
      general_inquiry: {
        name: 'Walter Skinner',
        email: 'spookyscary@gmail.com',
        phone: '(202) 222-5555',
      },
    },
    alcohol_license: {
      issuing_agency:
        'ABRA' /** Should standardize entries with a dropdown menu */,
      license_number:
        '555555-555555' /** Format restrictions based on issuing agency */,
      license_expiration:
        '04/03/2020' /** Format restrictions based on issuing agency */,
    },
    delivery_settings: {
      /** Delivery settings input on backend / by submitting non-public form */
      makes_deliveries: 'yes',
      distance_from_bar: '1 mile',
    },
  },
];
