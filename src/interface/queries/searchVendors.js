/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import Vendor from '../../data/models';
import VendorType from '../types/VendorType';
import db from '../../data/dbSimulator/Vendors.js';
import SearchVendorProximity from '../types/SearchVendorProximity';

const searchVendors = {
  type: List(VendorType),
  args: {
    vendor: { type: SearchVendorProximity },
  },
  resolve(value, { vendor }) {
    const vendorsDummy = db;
    return vendorsDummy;
  },
};

export default searchVendors;

/*    let vendors;
// Bar.findNearest() -- this needs to be postgis
vendors = Vendor.findNearest();
vendors.mapToDelivery; // set opts = input address is within distance */
