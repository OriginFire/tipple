import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import cx from 'classnames';
import s from './LandingButtons.scss';
import Link from '../../../utilityComponents/link/Link';
import PrimaryButton from "../primaryButton/PrimaryButton";
import SecondaryButton from "../secondaryButton/SecondaryButton";

class LandingButtons extends React.Component {
  render() {
    return (
      <div className={s.buttons}>
        <Link to="/partner">
          <SecondaryButton text={"Become A Partner"} />
        </Link>
        <Link to="/finder">
          <PrimaryButton text={"Browse Cocktails"} />
        </Link>
      </div>
    );
  }
}
export default withStyles(s)(LandingButtons);
