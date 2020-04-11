import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import cx from 'classnames';
import s from './AddressFormField.scss';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng} from "react-google-places-autocomplete";

class AddressFormField extends React.Component {


  render() {
    const { placeholder } = this.props;
    const activeSuggestion = this.state;
    console.log(activeSuggestion);

    return (
      <GooglePlacesAutocomplete
        /*       renderInput={(props) => (
          <div className={s.field}>
            <input className={cx(s.input_field)} required />
            <span className={s.placeholder}>{placeholder}</span>
          </div>
        )}

*/
        renderSuggestions={(
          activeSuggestion,
          suggestions,
          onSelectSuggestion,
        ) => (
          <div className={s.suggestion_container}>
            {suggestions.map(suggestion => (
              <div
                className={
                  suggestion.id == suggestions.activeSuggestion
                    ? s.active_suggestion
                    : s.suggestion
                }
                key={suggestion.id}
                onClick={event => onSelectSuggestion(suggestion, event)}
              >
                {suggestion.description}
              </div>
            ))}
          </div>
        )}
      />
    );
  }
}

export default withStyles(s)(AddressFormField);
