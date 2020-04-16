import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import cx from 'classnames';
import s from './HomepageContent.scss';
import Link from '../../utilityComponents/link';
import Button from '../../sitewideDisplayComponents/Button';
import FormField from "../../sitewideDisplayComponents/formField";
import AddressFormField from "../../utilityComponents/addressFormField/AddressFormField";

class HomepageContent extends React.Component {
  render() {
    return (
      <div className={s.homepage_content}>
        <div className={s.finder_content}>
          <h2 className={s.explainer}>Looking for craft cocktails from nearby bars?</h2>
          <AddressFormField
            placeholder="Your Current Address"
          />
          <Link to="/search-results">
            <Button type={"Primary"} text={"Browse Cocktails"} />
          </Link>
        </div>

        <div className={s.partner_content} >
          <h2 className={s.explainer}>Selling cocktails for pickup or delivery?</h2>
          <Link to="/partner">
            <Button type={"Secondary"} text={"List A Bar"} />
          </Link>
        </div>
      </div>
    );
  }
}
export default withStyles(s)(HomepageContent);
