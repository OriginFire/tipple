import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorCocktailSettings.scss';
import FormField from '../../sitewideDisplayComponents/formField';
import Button from "../../sitewideDisplayComponents/Button";
import {useMutation} from "graphql-hooks";

const UPDATE_COCKTAIL = `
  mutation UpdateCocktail(
    $id: String!,
    $name: String!,
    $ingredients: String,
    $price: Float,
    $servingSize: Float,
    $profile: String,
    $image: String,
  ) {
    updateCocktail( cocktail: {
        id: $id,
        name: $name,
        ingredients: $ingredients,
        price: $price,
        servingSize: $servingSize,
        profile: $profile,
        image: $image
      }
    ) {
      name
    }
  }
`;

function CocktailInput(props) {
  //on component render,
  //query graphql for cocktail based on props.cocktail.id

  const [name, setName] = useState(props.cocktail.name);
  const [ingredients, setIngredients] = useState(props.cocktail.ingredients);
  const [price, setPrice] = useState(props.cocktail.price);
  const [servingSize, setServingSize] = useState(props.cocktail.price);
  const [profile, setProfile] = useState(props.cocktail.profile);
  const [image, setImage] = useState(props.cocktail.image);
  const [updateCocktail] = useMutation(UPDATE_COCKTAIL);
  const id = props.cocktail.id;

  let active = props.activeId === props.cocktail.id;

  function toggleActive() {
    if (active) {
      props.updateActiveCocktailId(null);
    } else {
      props.updateActiveCocktailId(props.cocktail.id);
    }
  }

  async function submitUpdate() {
    const update = await updateCocktail({
      variables: {id, name, ingredients, price, servingSize, profile, image}
    });
    console.log(`Updating cocktail ${props.cocktail.id} with ${name}, ${ingredients}`);
    console.log(update);
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
      <Button type="Secondary" text="Save Changes" onClick={e => submitUpdate()}/>
      <Button type="Primary" text="Delete Cocktail"/>
    </div>
  );
}

export default withStyles(s)(CocktailInput);
