import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorCocktailSettings.scss';
import FormField from '../../sitewideDisplayComponents/formField';
import Button from "../../sitewideDisplayComponents/Button";
import db from "../../../data/dbSimulator/Vendors";
import {geocodeByAddress, getLatLng} from "react-google-places-autocomplete";

const UPDATE_COCKTAIL_MUTATOR = `stuff`

function CocktailInput(props) {
  let active = props.activeId === props.cocktail.id;

  const [name, setName] = useState(props.cocktail.name);
  const [ingredients, setIngredients] = useState(props.cocktail.ingredients);

  function toggleActive() {
    if (active) {
      props.updateActiveCocktailId(null);
    } else {
      props.updateActiveCocktailId(props.cocktail.id);
    }
  }

  function updateCocktail() {
    console.log(`Updating cocktail ${props.cocktail.id} with ${name}, ${ingredients}`);
    // call mutator
   toggleActive();
  }
  return (
    <div className={s.cocktail_edit_fields}>
      <div className={s.image_upload_line}>
        <img className={s.upload_image} src="../../../../Urbana.jpg" />
        <div className={s.upload_image_filename}>Test</div>
        <div></div>
      </div>
      <FormField
        placeholder="Cocktail Name"
        onChange={e => setName(e.target.value) }
        type="text"
        value={name}
      />
      <FormField
        placeholder="Ingredients"
        onChange={e => setIngredients(e.target.value) }
        type="text"
        value={ingredients}
      />
      <Button type="Secondary" text="Save Changes" onClick={e => updateCocktail()}/>
      <Button type="Primary" text="Delete Cocktail"/>
    </div>
  );
}

export default withStyles(s)(CocktailInput);
