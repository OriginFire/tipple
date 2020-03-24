import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import cx from 'classnames';
import s from './LandingButtons.scss';

class LandingButtons extends React.Component {
  render() {
    return (
      <div className={s.buttons}>
        <button className={cx(s.landing_button, s.browse_button)}>
          Browse Cocktails
        </button>
        <button className={cx(s.landing_button, s.partner_button)}>
          Become A Partner
        </button>
      </div>
    );
  }
}

export default withStyles(s)(LandingButtons);
