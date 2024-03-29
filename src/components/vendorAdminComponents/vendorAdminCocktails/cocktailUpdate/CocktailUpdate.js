import React, { useState, useContext, useEffect } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation } from 'graphql-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCocktail,
  faGlassWhiskey,
  faWineBottle,
  faWineGlass,
} from '@fortawesome/free-solid-svg-icons';
import s from './CocktailUpdate.scss';
import DynamicSetting from '../../dynamicSetting/DynamicSetting';
import ApplicationContext from '../../../ApplicationContext';
import Image from "../../../sitewideDisplayComponents/Image";

const UPDATE_COCKTAIL = `
  mutation UpdateCocktail(
    $JWT: String!,
    $id: String!,
    $name: String!,
    $ingredients: String,
    $price: Float,
    $servingSize: Float,
    $profile: String,
    $image: String,
    $description: String,
  ) {
    updateCocktail( cocktail: {
        JWT: $JWT,
        id: $id,
        name: $name,
        ingredients: $ingredients,
        price: $price,
        servingSize: $servingSize,
        profile: $profile,
        image: $image,
        description: $description,
      }
    ) {
      name
    }
  }
`;

const DELETE_COCKTAIL = `
  mutation DeleteCocktail($JWT: String!, $id: String!) {
    protectedDeleteCocktail( cocktail: {
        JWT: $JWT,
        id: $id
      }
    ) {
        id
      }
  }
`;

function CocktailUpdate(props) {
  const authenticationContext = useContext(ApplicationContext);
  const { cocktail } = props;

  const id = cocktail.id;
  const [cocktailName, setCocktailName] = useState(cocktail.name);
  const [cocktailImage, setCocktailImage] = useState(cocktail.ImageId);
  const [cocktailIngredients, setCocktailIngredients] = useState(
    cocktail.ingredients,
  );
  const [cocktailPrice, setCocktailPrice] = useState(cocktail.price);
  const [cocktailServingSize, setCocktailServingSize] = useState(
    cocktail.servingSize,
  );
  const [cocktailProfile, setCocktailProfile] = useState(cocktail.profile);
  const [cocktailDescription, setCocktailDescription] = useState(
    cocktail.description,
  );
  const { key } = props;
  const [updateCocktail] = useMutation(UPDATE_COCKTAIL);
  const [deleteCocktail] = useMutation(DELETE_COCKTAIL);

  async function submitUpdate() {
    const update = await updateCocktail({
      variables: {
        JWT: authenticationContext.context.JWT,
        id: id,
        name: cocktailName,
        ingredients: cocktailIngredients,
        price: parseFloat(cocktailPrice),
        servingSize: parseFloat(cocktailServingSize),
        description: cocktailDescription,
        profile: cocktailProfile,
        image: cocktailImage,
      },
    });
    console.log(
      `Updating cocktail ${props.cocktail.id} with ${cocktailName}, ${cocktailIngredients}`,
    );
    console.log(update);
  }

  async function cocktailToDelete(id) {
    console.log(id);
    if (confirm('Are you sure you want to delete this cocktail?')) {
      const deletion = await deleteCocktail({
        variables: {
          JWT: authenticationContext.context.JWT,
          id: id,
        }
      })
    } else {
      console.log('No');
    }
    props.cocktailDeleted;
  }

  function saveCocktail() {
    const updates = {
      name: cocktailName,
      image: cocktailImage,
      ingredients: cocktailIngredients,
      price: cocktailPrice,
      size: cocktailServingSize,
      profile: cocktailProfile,
      description: cocktailDescription,
    };
    submitUpdate();
    props.saveUpdates(updates);
  }

  function classNameResolve(setting) {
    if (cocktailProfile === setting) {
      return s.icon_active;
    }
    return s.icon_inactive;
  }

  return (
    <div className={s.edit_wrapper}>
      <div key={key} className={s.update_content}>
        <div>
          <div className={s.cocktail_image}>
            <Image
              ImageId={cocktailImage}
              alt={`${cocktailName} Image`}
            />
          </div>
          <div className={s.availability}>
            {cocktailName} is currently public. This is how it appears to users.
          </div>
        </div>

        <div className={s.result_text}>
          <div className={s.cocktail_name}>{cocktailName}</div>
          <div className={s.price}>
            From ${cocktail.price} / {cocktail.servingSize} oz serving
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
      <DynamicSetting
        settingName="Cocktail Name"
        settingValue={cocktailName}
        settingSave={newValue => setCocktailName(newValue)}
      />

      <DynamicSetting
        settingName="Ingredients"
        settingValue={cocktailIngredients}
        settingSave={newValue => setCocktailIngredients(newValue)}
      />

      <DynamicSetting
        settingName="Price of Smallest Serving"
        settingValue={cocktailPrice}
        specialDisplay={`$${cocktailPrice} / serving`}
        settingSave={newValue => setCocktailPrice(newValue)}
      />

      <DynamicSetting
        settingName="Size of Smallest Serving"
        settingValue={cocktailServingSize}
        specialDisplay={`${cocktailServingSize} oz / serving`}
        settingSave={newValue => setCocktailServingSize(newValue)}
      />

      <DynamicSetting
        settingName="Flavor Description"
        settingValue={cocktailDescription}
        settingSave={newValue => setCocktailDescription(newValue)}
      />

      <div className={s.profile_label}>What is this drink's profile?</div>
      <div className={s.profile_buttons}>
        <div>
          <div className={s.cocktail_button_label}>Stiff</div>
          <div
            className={classNameResolve('stiff')}
            onClick={e => setCocktailProfile('stiff')}
          >
            <FontAwesomeIcon icon={faGlassWhiskey} size="3x" />
          </div>
          <div className={s.button_explainer}>e.g. Old Fashioned</div>
        </div>

        <div>
          <div className={s.cocktail_button_label}>Strong</div>
          <div
            className={classNameResolve('strong')}
            onClick={e => setCocktailProfile('strong')}
          >
            <FontAwesomeIcon icon={faCocktail} size="3x" />
          </div>
          <div className={s.button_explainer}>e.g. Margarita</div>
        </div>

        <div>
          <div className={s.cocktail_button_label}>Long</div>
          <div
            className={classNameResolve('long')}
            onClick={e => setCocktailProfile('long')}
          >
            <FontAwesomeIcon icon={faWineGlass} size="3x" />
          </div>
          <div className={s.button_explainer}>e.g. Mojito</div>
        </div>

        <div>
          <div className={s.cocktail_button_label}>Low ABV</div>
          <div
            className={classNameResolve('low')}
            onClick={e => setCocktailProfile('low')}
          >
            <FontAwesomeIcon icon={faWineBottle} size="3x" />
          </div>
          <div className={s.button_explainer}>e.g. Spritzer</div>
        </div>
      </div>

      <div className={s.buttons}>
        <div className={s.action} onClick={e => saveCocktail()}>
          Save Changes
        </div>
        <div className={s.action} onClick={e => cocktailToDelete(cocktail.id)}>
          Delete Cocktail
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(CocktailUpdate);
