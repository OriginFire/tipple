import React, {useState} from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from "./IndividualVendorCocktails.scss";
import VendorCocktail from "./vendorCocktail/VendorCocktail";

function IndividualVendorCocktails(props) {
  const { cocktails } = props;
  const { vendor } = props;

  let availability = "Delivery or Pickup";
  let profile;

  return (
    <div className={s.cocktails}>
      {cocktails.map((cocktail, index) => {
        return (
          <div className={s.height_element}>
            <VendorCocktail cocktail={cocktail} index={index} />
          </div>
        );
      })}
    </div>
  );
}

export default withStyles(s)(IndividualVendorCocktails);
