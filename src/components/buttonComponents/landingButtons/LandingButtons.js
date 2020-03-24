import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './LandingButtons.scss';
import Link from "../../Link";
import cx from 'classnames';

class LandingButtons extends React.Component {
  render() {
    return (
      <div className={s.buttons}>
        <button className={ cx(s.landing_button, s.browse_button)}>Browse Cocktails</button>
        <button className={ cx(s.landing_button, s.partner_button)}>Become A Partner</button>
      </div>
    );
  }
}

export default withStyles(s)(LandingButtons);
