/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType, { STRING, BOOLEAN, INTEGER } from 'sequelize';
import Model from '../sequelize';

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

    vendorImage: {
      type: DataType.BLOB('long'),
    },

  },
  {
    indexes: [{ fields: ['id', 'slug'] }],
  },
);



export default Vendor;
