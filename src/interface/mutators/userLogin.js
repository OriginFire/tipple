/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import AuthenticationType from '../types/AuthenticationType';
import Vendor from '../../data/models/Vendor';
import UserLoginInputType from '../types/UserLoginInputType';
import User from "../../data/models/User";
import jwt from 'jsonwebtoken';
import config from '../../config'
import {GraphQLString as StringType} from "graphql/type/scalars";

const findVendor = {
  type: AuthenticationType,
  args: {
    user: { type: UserLoginInputType },
  },
  async resolve(value, { user }) {
    const foundUser = await User.authenticate(user.email, user.password);
    console.log(foundUser);
    const foundVendor = await Vendor.findOne({where: {id: foundUser.VendorId}});
    console.log(foundVendor);

    const payload = {
      vendorSlug: foundVendor.slug,
        userEmail: foundUser.email,
    };

    const JWT = jwt.sign(payload, config.auth.jwt.secret);

    return {
      JWT: JWT,
    };
  },
};

export default findVendor;
