import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './FinderForm.scss';
import FormField from '../formField/FormField';
import FormPrompt from '../formPrompt/FormPrompt';
import SubmitButton from '../../buttonComponents/submitButton/SubmitButton';
import GoBackButton from '../../buttonComponents/goBackButton/GoBackButton';
import Link from '../../utilityComponents/link';

class FinderForm extends React.Component {
  render() {
    return (
      <div className={s.finder_content}>
        <h1 className={s.finder_text}>
          We'll find cocktail takeout and delivery options in your area.
        </h1>
        <div className={s.finder_form}>
          <FormPrompt prompt="Where are you browsing from?" />
          <div className={s.finder_form_fields}>
            <FormField placeholder="Street Address" />
            <FormField placeholder="City" />
            <FormField placeholder="State" size="small" />
          </div>
          <div>
            <SubmitButton />
            <Link to="/">
              <GoBackButton />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(FinderForm);
