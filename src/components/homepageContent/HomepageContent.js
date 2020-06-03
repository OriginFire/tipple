import React, { useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import s from './HomepageContent.scss';
import history from '../../history';
import Button from '../sitewideDisplayComponents/Button';
import AddressFormField from '../utilityComponents/addressFormField/AddressFormField';
import HomepageImage from '../../../public/LevitationAspect.JPG';
import ApplicationContext from '../ApplicationContext';

function HomepageContent(props) {
  const context = useContext(ApplicationContext);

  function addressSelection(address) {
    geocodeByAddress(address).then(geoResults => {
      getLatLng(geoResults[0]).then(latLngResults => {
        console.log(latLngResults);
        context.context.userLatitude = latLngResults.lat;
        context.context.userLongitude = latLngResults.lng;
      });
    });
    console.log(context.context);
  }

  function commitSearch() {
    if (
      context.context.userLongitude === 0 ||
      context.context.userLatitude === 0
    ) {
      context.context.userLongitude = -77.02473599999999;
      context.context.userLatitude = 38.9405107;
      history.push('/search-results');
      console.log(context, "No search");
    } else {
      history.push('/search-results');
      console.log(ApplicationContext.context);
    }
  }

  return (
    <div className={s.homepage_content}>
      <div className={s.fill}>
        <img className={s.homepage_splash} src={HomepageImage} />
        <div className={s.header_text}>
          <div className={s.header_one}>
            Where can you get the very best cocktails?
          </div>
          <div className={s.header_two}>Anywhere.</div>
        </div>
      </div>

      <div className={s.action_content}>
        <div className={s.action_item}>
          <div className={s.explainer}>
            See the takeout cocktail menu in your area
          </div>
          <AddressFormField
            placeholder="Enter Your Address"
            onAddressSelection={addressSelection}
          />
          <Button
            type="Primary"
            text="Browse Cocktails"
            onClick={e => commitSearch()}
          />
        </div>

        <div className={s.action_item}>
          <Button
            type="Secondary"
            text="Become A Vendor"
            onClick={e => history.push('/vendor-create')}
          />
        </div>
      </div>
    </div>
  );
}
export default withStyles(s)(HomepageContent);
