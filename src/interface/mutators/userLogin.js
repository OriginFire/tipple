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
import Cocktail from '../../data/models/Cocktail';
import UserLoginInputType from '../types/UserLoginInputType';
import User from "../../data/models/User";

const findVendor = {
  type: VendorType,
  args: {
    user: { type: UserLoginInputType },
  },
  async resolve(value, { user }) {
    const foundUser = await User.authenticate(user.email, user.password);
    console.log(foundUser);
    const foundVendor = await Vendor.findOne({where: {id: foundUser.VendorId}});
    console.log(foundVendor);
    return foundVendor;

  },
};

export default findVendor;
