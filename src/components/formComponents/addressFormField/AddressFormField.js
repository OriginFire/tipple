import withStyles from "isomorphic-style-loader/withStyles";
import React from 'react';
import s from './AddressFormField.scss';
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

class AddressFormField extends React.Component {
  render() {
    return (
      <div className={s.field}>
        <GooglePlacesAutocomplete
          apiKey='AIzaSyDeggKU2mGqd-mrVEYdsoL9GclNaanQTo4'
          inputClassName='input_field'
        />
        <span className={s.placeholder}>placeholder</span>
      </div>
    );
  }
}

export default withStyles(s)(AddressFormField);
