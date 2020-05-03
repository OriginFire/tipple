/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/**
 * Passport.js reference implementation.
 * The database schema used in this sample is available at
 * https://github.com/membership/membership.db/tree/master/postgres
 */

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

import User from './data/models/User'

passport.use(new LocalStrategy({
    usernameField: 'usernameOrEmail',
    passwordField: 'password',
    session: true
  },
  async function (username, password, done) {
    try {
      let user = await User.authenticate(username, password);
      return done(null, user);
    } catch (err) {
      return done(null, false, {message: 'Unable to Authenticate'});
    }
  }
))
;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

export default passport;
