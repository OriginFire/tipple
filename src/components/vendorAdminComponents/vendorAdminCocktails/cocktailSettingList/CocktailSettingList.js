import React, { useState, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './CocktailSettingList.scss';
import Cocktail from '../cocktail/Cocktail';
import ApplicationContext from '../../../ApplicationContext';
import {useMutation} from "graphql-hooks";

const NEW_COCKTAIL = `
  mutation NewCocktail(
    $JWT: String!,
    $name: String!,
    $ingredients: String!,
    $description: String!,
    $price: Float!,
    $servingSize: Float!,
    $profile: String!,
  ) {
    newCocktail(cocktail: {
      JWT: $JWT,
      name: $name,
      ingredients: $ingredients,
      description: $description,
      price: $price
      servingSize: $servingSize,
      profile: $profile,
    }) {
      slug
      name
      ingredients
      description
      price
      servingSize
      profile
    }
  }
`;

function CocktailSettingList(props) {
  const { vendor } = props;
  const authenticationContext = useContext(ApplicationContext);
  const [addCocktail] = useMutation(NEW_COCKTAIL);
  let explainer;

  if (vendor.cocktails.length === 0) {
    explainer =
      "You haven't uploaded any cocktails yet. Click the 'Add A Cocktail' button to get started.";
  } else {
    explainer =
      "These are all the cocktails you've uploaded so far. To edit or remove a cocktail, select the 'Edit Details' button.";
  }

  const vendorSlug = vendor.slug;
  const vendorID = vendor.id;
  const name = 'Tipple';
  const ingredients = 'The good stuff';
  const description =
    "A lengthyish bit of text describing what the cocktail tastes like. It's currently unclear how long it will be!";
  const price = 3.5;
  const servingSize = 3.5;
  const profile = 'boozy';

  async function cocktailAdd() {
    const results = await addCocktail({
      variables: {
        JWT: authenticationContext.context.JWT,
        name,
        ingredients,
        description,
        price,
        servingSize,
        profile,
      },
    });
    console.log(results);
  }

  return (
    <div className={s.cocktail_list}>
      <div className={s.list_explainer}>{explainer}</div>
      {vendor.cocktails.map((cocktail, index, cocktails) => {
        return (
          <Cocktail
            key={cocktail.id}
            vendor={vendor}
            cocktail={cocktail}
          />
        );
      })}
    </div>
  );
}

export default withStyles(s)(CocktailSettingList);

/* <div className={s.buttons}>
  <Button
    type="Primary"
    onClick={e => cocktailAdd()}
    text="Add A Cocktail"
  />
</div> */
