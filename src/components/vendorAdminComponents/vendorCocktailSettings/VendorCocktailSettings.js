import React from 'react';
import withStyles from "isomorphic-style-loader/withStyles";
import s from './VendorCocktailSettings.scss';

class VendorCocktailSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>test</div>
    );
  }
}

export default withStyles(s)(VendorCocktailSettings);
