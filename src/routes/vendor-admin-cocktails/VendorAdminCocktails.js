import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './VendorAdminCocktails.scss';
import VendorAdminCocktail from "../../components/vendorAdminComponents/vendorAdminCocktailsDisplay/VendorAdminCocktailsDisplay";

class VendorAdminCocktails extends React.Component {
  render() {
    return (
      <VendorAdminCocktail slug={this.props.slug}/>
    );
  }
}

export default withStyles(s)(VendorAdminCocktails);
