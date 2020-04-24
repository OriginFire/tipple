/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import VendorType from '../types/VendorType';
import Vendor from '../../data/models/Vendor';

const searchVendors = {
  type: List(VendorType),
  resolve() {
    // Bar.findNearest() -- this needs to be postgis
    vendors = Vendor.findNearest()
    vendors.mapToDelivery // set opts = input address is within distance
    return (
      vendors
    );
  },
};

export default searchVendors;
