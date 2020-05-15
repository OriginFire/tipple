import React, { useState, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import ApplicationContext from '../../ApplicationContext';
import s from './Cocktail.scss';
import CocktailUpdate from './CocktailUpdate';

function Cocktail(props) {
  const authenticationContext = useContext(ApplicationContext);

  const { cocktail } = props;

  const [cocktailName, setCocktailName] = useState(cocktail.name);
  const [cocktailImage, setCocktailImage] = useState(cocktail.image);
  const [cocktailIngredients, setCocktailIngredients] = useState(
    cocktail.ingredients,
  );
  const [cocktailPrice, setCocktailPrice] = useState(cocktail.price);
  const [cocktailSize, setCocktailSize] = useState(cocktail.servingSize);
  const [cocktailProfile, setCocktailProfile] = useState(cocktail.profile);
  const [cocktailDescription, setCocktailDescription] = useState(
    cocktail.description,
  );
  const { key } = props;
  const [isOpen, setIsOpen] = useState(false);

  function cocktailUpdated(updates) {
    debugger
    console.log(updates);
    console.log(cocktailName);
    setIsOpen(false);
    setCocktailName(updates);
  }

  function DisplayContent() {
    if (isOpen) {
      return (
        <CocktailUpdate
          cocktail={cocktail}
          saveUpdates={newStateValues => cocktailUpdated(newStateValues)}
        />
      );
    }
    return (
      <div className={s.inactive}>
        <div key={key} className={s.list_item_open}>
          <div>
            <img
              className={s.cocktail_image}
              src={cocktailImage}
              alt={`${cocktailName} Image`}
            />
            <div className={s.availability}>
              {cocktail.name} is currently public. This is how it appears to
              users.
            </div>
            <div className={s.order} onClick={e => setIsOpen(true)}>
              Edit Details
            </div>
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

  return <div className={s.no_crash}>{DisplayContent()}</div>;
}

export default withStyles(s)(Cocktail);
