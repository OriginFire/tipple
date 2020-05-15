import React, { useState, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './CocktailUpdate.scss';
import DynamicSetting from "../dynamicSetting/DynamicSetting";
import {useMutation} from "graphql-hooks";
import ApplicationContext from "../../ApplicationContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCocktail, faGlassWhiskey, faWineBottle, faWineGlass} from "@fortawesome/free-solid-svg-icons";

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

function CocktailUpdate(props) {
  const authenticationContext = useContext(ApplicationContext);
  const { cocktail } = props;
  const [cocktailName, setCocktailName] = useState(cocktail.name);
  const [cocktailImage, setCocktailImage] = useState(cocktail.image);
  const [cocktailIngredients, setCocktailIngredients] = useState(cocktail.ingredients);
  const [cocktailPrice, setCocktailPrice] = useState(cocktail.price);
  const [cocktailSize, setCocktailSize] = useState(cocktail.servingSize);
  const [cocktailProfile, setCocktailProfile] = useState(cocktail.profile);
  const [cocktailDescription, setCocktailDescription] = useState(cocktail.description);
  const { key } = props;
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
      variables: {id, cocktailName, cocktailIngredients, cocktailPrice, cocktailServingSize, cocktailProfile, cocktailImage}
    });
    console.log(`Updating cocktail ${props.cocktail.id} with ${name}, ${ingredients}`);
    console.log(update);
   toggleActive();
  }
  return (
    <div className={s.active}>
      <div
        key={key}
        className={s.list_item_open}
      >
        <div>
          <img
            className={s.cocktail_image}
            src={cocktail.image}
            alt={`${cocktailName} Image`}
          />
          <div className={s.availability}>{cocktailName} is currently public. This is how it appears to users.</div>
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
        settingName={"Cocktail Name"}
        settingValue={cocktailName}
        settingSave={newValue => setCocktailName(newValue)}
      />

      <DynamicSetting
        settingName={"Ingredients"}
        settingValue={cocktailIngredients}
        settingSave={newValue => setCocktailIngredients(newValue)}
      />

      <DynamicSetting
        settingName={"Price of Smallest Serving"}
        settingValue={cocktailPrice}
        specialDisplay={`$${cocktailPrice} / serving`}
        settingSave={newValue => setCocktailPrice(newValue)}
      />

      <DynamicSetting
        settingName={"Size of Smallest Serving"}
        settingValue={cocktailSize}
        specialDisplay={`${cocktailSize} oz / serving`}
        settingSave={newValue => setCocktailSize(newValue)}
      />

      <DynamicSetting
        settingName={"Flavor Description"}
        settingValue={cocktailDescription}
        settingSave={newValue => setCocktailDescription(newValue)}
      />

      <div className={s.profile_label}>What is this drink's profile?</div>
      <div className={s.profile_buttons}>
        <div>
          <div className={s.cocktail_button_label}>Stiff</div>
          <div
            className={classNameResolve('stiff')}
            onclick={e => setCocktailProfile('stiff')
            }
          >
            <FontAwesomeIcon icon={faGlassWhiskey} size="3x"/>
          </div>
          <div className={s.button_explainer}>e.g. Old Fashioned</div>
        </div>

        <div>
          <div className={s.cocktail_button_label}>Strong</div>
          <div
            className={classNameResolve('strong')}
            onclick={e =>
              setCocktailProfile('strong')
            }
          >
            <FontAwesomeIcon icon={faCocktail} size="3x"/>
          </div>
          <div className={s.button_explainer}>e.g. Margarita</div>
        </div>

        <div>
          <div className={s.cocktail_button_label}>Long</div>
          <div
            className={classNameResolve('long')}
            onclick={e =>
              setCocktailProfile('long')
            }
          >
            <FontAwesomeIcon icon={faWineGlass} size="3x"/>
          </div>
          <div className={s.button_explainer}>e.g. Mojito</div>
        </div>

        <div>
          <div className={s.cocktail_button_label}>Low ABV</div>
          <div
            className={classNameResolve('low')}
            onclick={e =>
              setCocktailProfile('low')
            }
          >
            <FontAwesomeIcon icon={faWineBottle} size="3x"/>
          </div>
          <div className={s.button_explainer}>e.g. Spritzer</div>
        </div>
      </div>

      <div>
        <div className={s.order} onClick={e => setIsOpen(false)}>Save Changes</div>
        <div className={s.order} onClick={e => setIsOpen(true)}>Delete Cocktail</div>
      </div>
    </div>
  );
}

export default withStyles(s)(CocktailUpdate);
