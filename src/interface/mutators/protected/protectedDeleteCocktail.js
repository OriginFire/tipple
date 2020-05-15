import jwt from 'jsonwebtoken';
import Cocktail from '../../../data/models/Cocktail';
import CocktailType from '../../types/CocktailType';
import config from '../../../config';

const protectedDeleteCocktail = {
  type: CocktailType,
  args: {
    cocktail: { type: CocktailType },
  },
  async resolve(value, { cocktail }) {
    const JWT = jwt.verify(cocktail.JWT, config.auth.jwt.secret);

    await Cocktail.destroy(
      { where: { id: cocktail.id } },
    );
  },
};

export default protectedDeleteCocktail;
