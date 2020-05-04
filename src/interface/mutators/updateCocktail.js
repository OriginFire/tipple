import CocktailInputType from '../types/CocktailInputType';
import Cocktail from '../../data/models/Cocktail';
import CocktailType from '../types/CocktailType';

const fs = require('fs');

function base64_encode(file) {
  // read binary data
  const bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64');
}

function stringToSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaeeeeiiiioooouuuunc------';
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}

const updateCocktail = {
  type: CocktailType,
  args: {
    cocktail: {type: CocktailInputType},
  },
  async resolve(value, {cocktail}) {
    //check JWT valid
    //check auth to make sure you're allowed to update
    const cocktailFormInput = cocktail; // unsure why vendor needs to be exact name?
    Cocktail.update(
      {
        slug: stringToSlug(cocktailFormInput.name),
        name: cocktailFormInput.name,
        ingredients: cocktailFormInput.ingredients,
        price: cocktailFormInput.price,
        servingSize: cocktailFormInput.servingSize,
        profile: cocktailFormInput.profile,
        image: cocktailFormInput.image
      },
      {where: {id: cocktail.id}},
    );
  },
};

export default updateCocktail;
