import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import s from './DynamicSetting.scss';
import AddressFormField from "../../utilityComponents/addressFormField/AddressFormField";
import {geocodeByAddress, getLatLng} from "react-google-places-autocomplete";

function DynamicSettingAddress(props) {
  const { settingName } = props;
  const { settingValue } = props;
  const { specialDisplay } = props;
  const [address, setAddress] = useState(props.settingValue);
  const [lat, setLat] = useState(props.latitude);
  const [lng, setLng] = useState(props.longitude);
  const [inputDisplayed, setInputDisplayed] = useState(false);

  function SpecialDisplay() {
    if (specialDisplay) {
      return specialDisplay;
    }
    return settingValue;
  }

  function updateSetting() {
    const addressData = [address, lat, lng];
    setInputDisplayed(false);
    props.settingSave(addressData);
  }

  function addressSelection(inputAddress) {
    setAddress(inputAddress);
    geocodeByAddress(address).then(geoResults => {
      getLatLng(geoResults[0]).then(latLngResults => {
        setLat(latLngResults.lat);
        setLng(latLngResults.lng);
      });
    });
  }

  function Content() {
    if (inputDisplayed) {
      return (
        <div>
          <div className={s.input_setting}>
            <div className={s.input}>
              <AddressFormField
                placeholder={settingName}
                onAddressSelection={addressSelection}
              />
            </div>
            <div className={s.save} onClick={(e) => updateSetting()}>
              Save
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className={s.display_setting}>
          <div className={s.setting_field}>{settingName}</div>
          <div className={s.setting_value}>{SpecialDisplay()}</div>
          <FontAwesomeIcon
            icon={faEdit}
            className={s.icon}
            color="#7d7d7d"
            onClick={e => setInputDisplayed(true)}
          />
        </div>
      </div>
    );
  }

  return <div>{Content()}</div>;
}

export default withStyles(s)(DynamicSettingAddress);
