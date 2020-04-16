import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import { geocodeByAddress, getLatLng} from 'react-google-places-autocomplete';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import s from './AddressFormField.scss';

class AddressFormField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 'test',
    };
  }

  render() {
    const { placeholder } = this.props;
    console.log(this.state.address);

    return (
      <GooglePlacesAutocomplete
        onSelect={({ description }) => this.setState({ address: description })}
        renderInput={(props) => (
          <div className={s.field}>
            <input
              className={s.input_field}
              {...props}
              required
              placeholder={''}
            />
            <span className={s.placeholder}>{placeholder}</span>
          </div>
        )}

        renderSuggestions={(
          activeSuggestion,
          suggestions,
          onSelectSuggestion,
        ) => (
          <div className={s.suggestion_container}>
            {suggestions.map((suggestion, index, suggestions) => {
              let suggestionClass;
              if (index === activeSuggestion) {
                suggestionClass = s.active_suggestion;
              } else {
                suggestionClass = s.suggestion;
              }

              return (
                <div
                  className={suggestionClass}
                  key={index}
                  onClick={event => onSelectSuggestion(suggestion, event)}
                >
                  {suggestion.description}
                </div>
              );
            })}
          </div>
        )}
      />
    );
  }
}

export default withStyles(s)(AddressFormField);
