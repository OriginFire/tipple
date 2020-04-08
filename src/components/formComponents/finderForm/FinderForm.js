import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './FinderForm.scss';
import FormField from '../formField/FormField';
import FormPrompt from '../formPrompt/FormPrompt';
import Button from "../../displayComponents/buttonComponents/Button/Button";
import Link from '../../utilityComponents/link/Link';

class FinderForm extends React.Component {
  render() {
    return (
      <div className={s.finder_content}>
        <h1 className={s.finder_text}>
          We'll find cocktail takeout and delivery options in your area.
        </h1>
        <div className={s.finder_form}>
          <FormPrompt prompt="Enter Your Address" />
          <div className={s.finder_form_fields}>
            <FormField placeholder="Street Address" />
            <FormField placeholder="City" size="Large" />
            <FormField placeholder="State" size="Small" />
            <FormField placeholder="Zip Code" size="Medium" />
          </div>
          <div className={s.buttons}>
            <Link to="/">
              <Button type={"Secondary"} text={"Return Home"}/>
            </Link>

            <Link to="search-results">
              <Button type={"Primary"} text={"Find Cocktail Bars"} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(FinderForm);
