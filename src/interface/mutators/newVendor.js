/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import VendorType from '../types/VendorType';
import Vendor from '../../data/models/Vendor';
import VendorInputType from '../types/VendorInputType';
import {GraphQLInt as IntegerType, GraphQLString as StringType} from "graphql/type/scalars";

const newVendor = {
  type: VendorType,
  args: {
    vendor: { type: VendorInputType },
  },
  resolve(value, { vendor }) {
   /** console.log('im here'); */
    const v = Vendor.create({
      vendorId: vendor.vendorId,
      dbaName: vendor.dbaName,
      adminName: vendor.adminName,
      adminEmail: vendor.adminEmail,
      adminPhone: vendor.adminPhone,
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
      deliveryRadius: vendor.deliveryRadius,
      onlineStore: vendor.onlineOrdering,
      vendorImage: vendor.vendorImage,
    });
    return v;
  },
};

export default newVendor;
