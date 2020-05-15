import React, {useState, useContext} from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './Cocktail.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ApplicationContext from "../../ApplicationContext";
import {
  faGlassWhiskey,
  faCocktail,
  faWineBottle,
  faWineGlass,
} from '@fortawesome/free-solid-svg-icons';
import {useMutation, useQuery} from "graphql-hooks";
import DynamicSetting from "../dynamicSetting/DynamicSetting";

const DELETE_COCKTAIL = `
  query DeleteCocktail($JWT: String!, $id: String!) {
    protectedDeleteCocktail( cocktail: {
        JWT: $JWT,
        id: $id
      }
    )
  }
`

function Cocktail(props) {
  const authenticationContext = useContext(ApplicationContext);

  const { vendor } = props;
  const { cocktail } = props;
  const [cocktailName, setCocktailName] = useState(cocktail.name);
  const [cocktailImage, setCocktailImage] = useState(cocktail.image);
  const [cocktailIngredients, setCocktailIngredients] = useState(cocktail.ingredients);
  const [cocktailPrice, setCocktailPrice] = useState(cocktail.price);
  const [cocktailSize, setCocktailSize] = useState(cocktail.servingSize);
  const [cocktailProfile, setCocktailProfile] = useState(cocktail.profile);
  const [cocktailDescription, setCocktailDescription] = useState(cocktail.description);
  const { key } = props;
  const [isOpen, setIsOpen] = useState(false);
  let availability;

  if (vendor.doesDelivery && vendor.doesPickup) {
    availability = 'Delivery or Pickup';
  } else if (!vendor.doesDelivery && vendor.doesPickup) {
    availability = 'Pickup Only';
  } else {
    availability = 'Delivery Only';
  }

  function classNameResolve(setting) {
    if (cocktailProfile === setting) {
      return s.icon_active;
    }
    return s.icon_inactive;
  }

  function DisplayContent() {
    if (isOpen) {
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
                onClick={e => setCocktailProfile('stiff')
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
                onClick={e =>
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
                onClick={e =>
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
                onClick={e =>
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
    } else {
      return (
        <div className={s.inactive}>
          <div
            key={key}
            className={s.list_item_open}
          >
            <div>
              <img
                className={s.cocktail_image}
                src={cocktailImage}
                alt={`${cocktailName} Image`}
              />
              <div className={s.availability}>{cocktail.name} is currently public. This is how it appears to users.</div>
              <div className={s.order} onClick={e => setIsOpen(true)}>Edit Details</div>
            </div>

            <div className={s.result_text}>
              <div className={s.cocktail_name}>{cocktail.name}</div>
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
        </div>
      );
    }
  }

  return <div className={s.no_crash}>{DisplayContent()}</div>;
}

export default withStyles(s)(Cocktail);
