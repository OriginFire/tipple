/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Finder.scss';
import Link from '../../components/Link';
import GoBackButton from "../../components/buttonComponents/goBackButton/GoBackButton";
import SubmitButton from "../../components/buttonComponents/submitButton/SubmitButton";

class Finder extends React.Component {
  render() {
    return (
      <div className={s.finder_content}>
        <h1 className={s.finder_text}>What address are browsing from? We'll find cocktail takeout and delivery options in your area.</h1>
        <div className={s.finder_form}>
          <div className={s.finder_form_fields}>
            <input className={s.input_field} placeholder="Street Address" />
            <input className={s.input_field} placeholder="City" />
            <input className={s.input_field} placeholder="State" />
          </div>
          <div className={s.buttons}>
            <SubmitButton />
            <Link to="/" >
              <GoBackButton />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Finder);
