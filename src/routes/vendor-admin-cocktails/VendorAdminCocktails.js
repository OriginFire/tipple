import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './VendorAdminCocktails.scss';
import VendorAdminCocktail from "../../components/vendorAdminComponents/vendorAdminCocktails/VendorAdminCocktails";

class VendorAdminCocktails extends React.Component {
  render() {
    return (
      <VendorAdminCocktail id={this.props.id}/>
    );
  }
}

export default withStyles(s)(VendorAdminCocktails);
