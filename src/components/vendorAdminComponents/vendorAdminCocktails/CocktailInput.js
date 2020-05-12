import React, { useState, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorCocktailSettings.scss';
import DynamicSetting from "../dynamicSetting/DynamicSetting";
import FormField from '../../sitewideDisplayComponents/formField';
import Button from "../../sitewideDisplayComponents/Button";
import {useMutation} from "graphql-hooks";
import DynamicSettingLong from "../dynamicSetting/DynamicSettingLong";
import ApplicationContext from "../../ApplicationContext";

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

  function deleteCocktail() {
    console.log("Delete cocktail fired");
    if (confirm("Are you sure you want to delete this cocktail?")) {
      console.log('Yes')
    } else {
      console.log('No')
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
      <DynamicSetting
        settingName={name}
        settingValue={name}
      />
      <FormField
        placeholder="Ingredients"
        onChange={e => setIngredients(e.target.value) }
        type="text"
        value={ingredients}
      />
      <DynamicSettingLong
        settingName="Cocktail Name"
        settingValue={name}
      />
      <Button type="Secondary" text="Save Changes" onClick={e => submitUpdate()}/>
      <Button type="Primary" text="Delete Cocktail" onClick={e=> deleteCocktail()}/>
    </div>
  );
}

export default withStyles(s)(CocktailInput);
