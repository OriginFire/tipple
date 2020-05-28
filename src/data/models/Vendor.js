import DataType from 'sequelize';
import Model from '../sequelize';
import stringToSlug from "../../utils/stringToSlug";

const Vendor = Model.define(
  'Vendor',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    slug: {
      type: DataType.STRING(256),
    },

    dbaName: {
      type: DataType.STRING(256),
    },

    legalEntityName: {
      type: DataType.STRING(256),
    },

    physicalAddress: {
      type: DataType.STRING(256),
    },

    physicalStreetAddress: {
      type: DataType.STRING(256),
    },

    physicalCity: {
      type: DataType.STRING(256),
    },

    physicalState: {
      type: DataType.STRING(256),
    },

    physicalZipCode: {
      type: DataType.STRING(256),
    },

    latitude: {
      type: DataType.DOUBLE,
    },

    longitude: {
      type: DataType.DOUBLE,
    },

    alcoholLicenseNumber: {
      type: DataType.STRING(256),
    },

    alcoholLicenseIssuingAgency: {
      type: DataType.STRING(256),
    },

    alcoholLicenseExpiration: {
      type: DataType.STRING(256),
    },

    doesDelivery: {
      type: DataType.BOOLEAN,
    },

    doesPickup: {
      type: DataType.BOOLEAN,
    },

    deliveryRadius: {
      type: DataType.STRING(256),
    },

    onlineStore: {
      type: DataType.STRING(256),
    },

    vendorImage: {
      type: DataType.BLOB('long'),
    },
  },
  {
    indexes: [{ fields: ['id', 'slug'] }],
  },
);

Vendor.beforeCreate(async (vendor, options) => {
  vendor.slug=stringToSlug(vendor.dbaName);
});

Vendor.beforeUpdate(async (vendor, options) => {
  vendor.slug=stringToSlug(vendor.dbaName);
});


export default Vendor;
