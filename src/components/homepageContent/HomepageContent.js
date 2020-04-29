import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import s from './HomepageContent.scss';
import Link from '../utilityComponents/link';
import Button from '../sitewideDisplayComponents/Button';
import Splash from '../sitewideDisplayComponents/Splash/Splash';
import AddressFormField from '../utilityComponents/addressFormField/AddressFormField';
import HomepageImage from '../../../public/LevitationAspect.JPG';
import ApplicationContext from '../ApplicationContext';

class HomepageContent extends React.Component {
  constructor(props) {
    super(props);
    this.addressSelection = this.addressSelection.bind(this);
    this.state = {};
  }

  static contextType = ApplicationContext;

  addressSelection(address) {
    geocodeByAddress(address).then(geoResults => {
      getLatLng(geoResults[0]).then(latLngResults => {
        this.context.context.userLatitude = latLngResults.lat;
        this.context.context.userLongitude = latLngResults.lng;
      });
    });
  }

  render() {
    return (
      <div className={s.homepage_content}>
        <Splash
          image={HomepageImage}
          first_line="It's a stir crazy world."
          second_line="Of course they deliver cocktails."
        />
        <div className={s.action_content}>
          <div className={s.action_item}>
            <h2 className={s.explainer}>
              Find nearby bars delivering craft cocktails
            </h2>
            <AddressFormField
              placeholder="Enter Your Address"
              onAddressSelection={this.addressSelection}
            />
            <Link to="/search-results">
              <Button type="Primary" text="Browse Cocktails" />
            </Link>
          </div>

          <div className={s.action_item}>
            <h2 className={s.explainer}>
              If your bar sells cocktails to go
            </h2>
            <Link to="/vendor-create">
              <Button type="Secondary" text="Become A Vendor" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(s)(HomepageContent);
