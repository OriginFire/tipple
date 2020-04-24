import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import s from './HomepageContent.scss';
import Link from '../../utilityComponents/link';
import Button from '../../sitewideDisplayComponents/Button';
import Splash from '../../sitewideDisplayComponents/Splash/Splash';
import AddressFormField from '../../utilityComponents/addressFormField/AddressFormField';
import HomepageImage from '../../../../public/LevitationAspect.JPG';
import ApplicationContext from "../../ApplicationContext";

class HomepageContent extends React.Component {
  constructor(props) {
    super(props);
    this.addressSelection = this.addressSelection.bind(this);
    this.state = {
      userAddress: '',
      addressGeocode: null,
    };
  }
  static contextType = ApplicationContext;
  addressSelection(address) {
    this.context.context.temp = address;
  }

  render() {
    console.log(this.context.context.temp);
    return (
      <div className={s.homepage_content}>
        <Splash
          image={HomepageImage}
          first_line="Mixology in a bottle."
          second_line="Crafted by local bars."
        />
        <div className={s.action_content}>
          <div className={s.action_item}>
            <h2 className={s.explainer}>
              Looking for craft cocktails from nearby bars?
            </h2>
            <AddressFormField placeholder="Your Current Address" onAddressSelection={this.addressSelection} />
            <Link to="/search-results">
              <Button
                type="Primary"
                text="Browse Cocktails"
                onClick={e =>
                  geocodeByAddress(this.state.userAddress).then(results =>
                    console.log(results),
                  )
                }
              />
            </Link>
          </div>

          <div className={s.action_item}>
            <h2 className={s.explainer}>
              Selling cocktails for pickup or delivery?
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
