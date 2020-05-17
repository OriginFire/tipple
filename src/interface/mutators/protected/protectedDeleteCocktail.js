import jwt from 'jsonwebtoken';
import Cocktail from '../../../data/models/Cocktail';
import CocktailType from "../../types/CocktailType";
import CocktailInputType from '../../types/CocktailInputType';
import config from '../../../config';

const protectedDeleteCocktail = {
  type: CocktailType,
  args: {
    cocktail: { type: CocktailInputType },
  },
  resolve(value, { cocktail }) {
    const JWT = jwt.verify(cocktail.JWT, config.auth.jwt.secret);

    Cocktail.destroy(
      { where: { id: cocktail.id } },
    );
  },
};

export default protectedDeleteCocktail;
