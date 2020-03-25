import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import cx from 'classnames';
import s from './LandingButtons.scss';
import Link from '../../Link'

class LandingButtons extends React.Component {
  render() {
    return (
      <div className={s.buttons}>
        <Link to='/finder' >
          <button className={cx(s.landing_button, s.browse_button)}>
            Browse Cocktails
          </button>
        </Link>
        <Link to='/partner' >
          <button className={cx(s.landing_button, s.partner_button)}>
            Become A Partner
          </button>
        </Link>

      </div>
    );
  }
}
export default withStyles(s)(LandingButtons);
