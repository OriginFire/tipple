import CocktailInputType from '../types/CocktailInputType';
import Cocktail from '../../data/models/Cocktail';
import CocktailType from '../types/CocktailType';
import jwt from "jsonwebtoken";
import config from "../../config";

const fs = require('fs');

function base64_encode(file) {
  // read binary data
  const bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64');
}

const updateCocktail = {
  type: CocktailType,
  args: {
    cocktail: {type: CocktailInputType},
  },
  async resolve(value, {cocktail}) {
    //check JWT valid
    const JWT = jwt.verify(cocktail.JWT, config.auth.jwt.secret);

    //check auth to make sure you're allowed to update
    const cocktailFormInput = cocktail; // unsure why vendor needs to be exact name?
    Cocktail.update(
      {
        name: cocktailFormInput.name,
        ingredients: cocktailFormInput.ingredients,
        price: cocktailFormInput.price,
        servingSize: cocktailFormInput.servingSize,
        description: cocktailFormInput.description,
        profile: cocktailFormInput.profile,
        image: cocktailFormInput.image,
      },
      {where: {slug: cocktail.slug}},
    );
  },
};

export default updateCocktail;
