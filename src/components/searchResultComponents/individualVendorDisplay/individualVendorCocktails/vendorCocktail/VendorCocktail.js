import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlassWhiskey,
  faWineBottle,
  faCocktail,
  faWineGlass,
} from '@fortawesome/free-solid-svg-icons';
import s from './VendorCocktail.scss';
import history from "../../../../../history";
import Image from "../../../../sitewideDisplayComponents/Image";

function VendorCocktail(props) {
  const { cocktail } = props;
  const { index } = props;
  const [expanded, setExpanded] = useState(false);
  let profile = {
    icon: null,
    string: null,
  };

  switch (cocktail.profile) {
    case 'stiff':
      profile = {
        icon: faGlassWhiskey,
        string: 'This cocktail is stiff, like a Martini, Old Fashioned, etc.',
      };
      break;
    case 'strong':
      profile = {
        icon: faCocktail,
        string:
          'This cocktail is mixed, like a Margarita, Daiquiri, etc.',
      };
      break;
    case 'long':
      profile = {
        icon: faWineGlass,
        string:
          'This cocktail has a non-alcoholic lengthener, like a Moscow Mule, Mojito, etc.',
      };
      break;
    case 'lowABV':
      profile = {
        icon: faWineBottle,
        string: 'This cocktail is low alcohol, like a Wine Sprtizer.',
      };
      break;
  }

  return (
    <div key={index} className={s.cocktail}>
      <div>
        <div className={s.cocktail_image}>
          <Image
            ImageId={cocktail.ImageId}
            alt={`${cocktail.name} Image`}
          />
        </div>
        <div className={s.profile}>
          <FontAwesomeIcon icon={profile.icon} size="lg" className={s.icon} />
          <div>{profile.string}</div>
        </div>
        <div className={s.order} onClick={e => history.push(`${vendor.onlineStore}`)}>Order</div>
      </div>

      <div className={s.result_text}>
        <div className={s.cocktail_name}>{cocktail.name}</div>
        <div className={s.price}>
          ${cocktail.price} / {cocktail.servingSize} oz serving
        </div>

        <div className={s.ingredients}>
          {cocktail.ingredients} {cocktail.ingredients.length}
        </div>



        <div className={s.description}>
          {cocktail.description} {cocktail.description.length}
          {cocktail.description} {cocktail.description.length}
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(VendorCocktail);
