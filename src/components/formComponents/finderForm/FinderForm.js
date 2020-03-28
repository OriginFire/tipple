import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './FinderForm.scss';
import FormField from '../formField/FormField';
import FormPrompt from '../formPrompt/FormPrompt';
import PrimaryButton from "../../displayComponents/buttonComponents/primaryButton/PrimaryButton";
import SecondaryButton from "../../displayComponents/buttonComponents/secondaryButton/SecondaryButton";
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
          <div>
            <Link to="search-results">
              <PrimaryButton text={"Find Cocktail Bars"} />
            </Link>
            <Link to="/">
              <SecondaryButton text={"Return Home"}/>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(FinderForm);
