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

    dbaName: {
      type: DataType.STRING(255),
    },

    adminName: {
      type: DataType.STRING(255),
    },

    adminEmail: {
      type: DataType.STRING(255),
    },

    adminPhone: {
      type: DataType.STRING(255),
    },

    physicalStreetAddress: {
      type: DataType.STRING(255),
    },

    physicalCity: {
      type: DataType.STRING(255),
    },

    physicalState: {
      type: DataType.STRING(255),
    },

    physicalZipCode: {
      type: DataType.STRING(255),
    },

    latitude: {
      type: DataType.INTEGER,
    },

    longitude: {
      type: DataType.INTEGER,
    },

    alcoholLicenseNumber: {
      type: DataType.STRING(255),
    },

    alcoholLicenseIssuingAgency: {
      type: DataType.STRING(255),
    },

    alcoholLicenseExpiration: {
      type: DataType.STRING(255),
    },

    doesDelivery: {
      type: DataType.BOOLEAN,
    },

    doesPickup: {
      type: DataType.BOOLEAN,
    },

    deliveryRadius: {
      type: DataType.INTEGER,
    },

    onlineStore: {
      type: DataType.STRING(255),
    },

    vendorImage: {
      type: DataType.STRING(255),
    },

    legalEntity: {
      type: DataType.STRING(255),
      // validate: { isEmail: true },
    },

    vendorId: {
      type: DataType.STRING(255),
    },
  },
  {
    indexes: [{ fields: ['id'] }],
  },
);

export default Vendor;
