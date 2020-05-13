import React, { useState, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import {useMutation, useQuery} from 'graphql-hooks';
import s from './VendorAdminCocktails.scss';
import Button from '../../sitewideDisplayComponents/Button';
import CocktailSettingList from './CocktailSettingList';
import ApplicationContext from "../../ApplicationContext";
import VendorConsole from "../vendorAdminConsole/VendorAdminConsole";

const FIND_VENDOR = `
  query FindVendor($slug: String!, $JWT: String!) {
    protectedFindVendor(vendor: { slug: $slug, JWT: $JWT }) {
      id
      dbaName
      slug
      cocktails {
        id
        name
        ingredients
        price
        servingSize
        profile
        description
        image
      }
    }
  }
  `;

const NEW_COCKTAIL = `
  mutation NewCocktail(
    $JWT: String!,
    $name: String!,
    $ingredients: String!,
    $price: Float!,
    $servingSize: Float!,
    $profile: String!,
  ) {
    newCocktail(cocktail: {
      JWT: $JWT,
      name: $name,
      ingredients: $ingredients,
      price: $price
      servingSize: $servingSize,
      profile: $profile,
    }) {
      name
      ingredients
      price
      servingSize
      profile
    }
  }
`;

function VendorAdminCocktails(props) {
  const authenticationContext = useContext(ApplicationContext);
  const { loading, error, data } = useQuery(FIND_VENDOR, {
    variables: { slug: props.slug, JWT: authenticationContext.context.JWT },
  });
  const [addCocktail] = useMutation(NEW_COCKTAIL);

  let vendor;

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';
  if (data) {
    vendor = data.protectedFindVendor;
  }

  console.log(vendor.id);
  console.log(vendor.cocktails[0]);

  const vendorSlug = props.slug;
  const vendorID = vendor.id;
  const name = 'Tipple';
  const ingredients = 'The good stuff';
  const price = 3.5;
  const servingSize = 3.5;
  const profile = 'boozy';

  async function cocktailAdd() {
    const results = await addCocktail( {
      variables: {JWT: authenticationContext.context.JWT, name, ingredients, price, servingSize, profile}
    });
    console.log(results);
  };

  return (
    <div className={s.container}>
      {vendor && (
        <div className={s.vendor_admin_display}>
          <VendorConsole vendor={vendor} active={'cocktail'} />
          <div className={s.vendor_setting_content}>
            <CocktailSettingList vendor={vendor} />
          </div>
          <div className={s.buttons}>
            <Button
              type="Primary"
              onClick={e => cocktailAdd()}
              text="Add A Cocktail"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default withStyles(s)(VendorAdminCocktails);
