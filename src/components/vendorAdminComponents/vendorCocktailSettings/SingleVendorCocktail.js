import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorCocktailSettings.scss';
import CocktailInput from "./CocktailInput";

function SingleVendorCocktail(props) {
  let active = props.activeId === props.cocktail.id;

  function toggleActive() {
    if (active) {
      props.updateActiveCocktailId(null);
    } else {
      props.updateActiveCocktailId(props.cocktail.id);
    }
  }

  let cocktailItemStatus;
  if (active) {
    cocktailItemStatus = s.item_box_active;
  } else {
    cocktailItemStatus = s.item_box;
  }

  return (
    <div className={cocktailItemStatus}>
      <div className={s.cocktail} onClick={e => toggleActive()}>
        <img className={s.cocktail_image} src={`data:image/jpg;base64,${props.cocktail.image}`} />
        <div className={s.cocktail_text}>
          <div className={s.cocktail_name}>{props.cocktail.name}</div>
          <div className={s.ingredients}>
            {props.cocktail.ingredients}
          </div>
        </div>

      </div>
      {active &&
        <CocktailInput cocktail={props.cocktail} activeId={props.activeId} updateActiveCocktailId={props.updateActiveCocktailId}/>
      }
    </div>
  )
}

export default withStyles(s)(SingleVendorCocktail);
//