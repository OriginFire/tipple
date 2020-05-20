import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown,
  faGlassWhiskey,
  faWineBottle,
  faCocktail,
  faWineGlass,
} from '@fortawesome/free-solid-svg-icons';
import s from './VendorCocktail.scss';

function VendorCocktail(props) {
  const { cocktail } = props;
  const { index } = props;
  const [expanded, setExpanded] = useState(false);
  let profile;

  switch (cocktail.profile) {
    case 'stiff':
      profile = faGlassWhiskey;
      break;
    case 'strong':
      profile = faCocktail;
      break;
    case 'long':
      profile = faWineGlass;
      break;
    case 'lowABV':
      profile = faWineBottle;
      break;
  }

  return (
    <div key={index} className={s.cocktail}>
      <div>
        <img
          className={s.cocktail_image}
          src={cocktail.image}
          alt={`${cocktail.name} Image`}
        />
        <div className={s.cocktail_name}>{cocktail.name}</div>
        <div className={s.price}>
          ${cocktail.price} / {cocktail.servingSize} oz serving
        </div>
      </div>

      <div className={s.result_text}>
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

/* {!expanded && (
  <div className={s.expand} onClick={e => setExpanded(true)}>
    More Details{` `}
    <FontAwesomeIcon icon={faChevronDown} size="xs" />
  </div>
)}
{expanded && (
  <div>

    <div className={s.expand} onClick={e => setExpanded(false)}>
      More Details{` `}
      <FontAwesomeIcon icon={faChevronUp} size="xs" />
    </div>
  </div>
)} */
