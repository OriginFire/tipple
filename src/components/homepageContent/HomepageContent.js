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
        />
        <div className={s.action_content}>
          <div className={s.header_text}>
            <div className={s.header_one}>Where can you get the very best cocktails?</div>
            <div className={s.header_two}>Anywhere.</div>
          </div>
          <div className={s.action_item}>
            <div className={s.explainer}>
              Nearby bars selling takeout cocktails
            </div>
            <AddressFormField
              placeholder="Enter Your Address"
              onAddressSelection={this.addressSelection}
            />
            <Link to="/search-results">
              <Button type="Primary" text="Browse Cocktails" />
            </Link>
          </div>

          <div className={s.action_item}>
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
