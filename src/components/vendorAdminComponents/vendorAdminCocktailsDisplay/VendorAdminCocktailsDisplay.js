import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import {useMutation, useQuery} from 'graphql-hooks';
import s from './VendorAdminCocktailsDisplay.scss';
import Button from '../../sitewideDisplayComponents/Button';
import VendorCocktailSettings from '../vendorCocktailSettings/VendorCocktailSettings';
import history from '../../../history';

const FIND_VENDOR = `
  query FindVendor($slug: String!) {
    findVendor(vendor: { slug: $slug }) {
      physicalStreetAddress
      physicalCity
      dbaName
      cocktails {
        id
        name
        ingredients
        price
        servingSize
        profile
        image
      }
    }
  }
  `;

const NEW_COCKTAIL = `
  mutation NewCocktail(
    $vendorSlug: String!,
    $name: String!,
    $ingredients: String!,
    $price: Float!,
    $servingSize: Float!,
    $profile: String!,
  ) {
    newCocktail(cocktail: {
      vendorSlug: $vendorSlug,
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

function VendorAdminCocktailsDisplay(props) {
  const { loading, error, data } = useQuery(FIND_VENDOR, {
    variables: { slug: props.slug },
  });
  const [addCocktail] = useMutation(NEW_COCKTAIL);

  let vendor;
  if (data) {
    vendor = data.findVendor;
  }

  const vendorSlug = props.slug;
  const name = 'Tipple';
  const ingredients = 'The good stuff';
  const price = 3.5;
  const servingSize = 3.5;
  const profile = 'boozy';

  async function cocktailAdd() {
    const results = await addCocktail( {
      variables: {vendorSlug, name, ingredients, price, servingSize, profile}
    });
    console.log(results);
  };

  return (
    <div className={s.container}>
      {vendor && (
        <div className={s.vendor_admin_display}>
          <div className={s.context_control}>
            <div className={s.vendor_name}>{vendor.dbaName}</div>
            <h2 className={s.result_explainer}>
              Here you can manage {vendor.dbaName}'s account details (user info,
              online service settings, cocktails, etc.)
            </h2>

            <div className={s.display_selectors}>
              <div
                className={s.inactive}
                onClick={e => history.push(`/vendor-admin/${vendor.slug}`)}
              >
                Account Details
              </div>
              <div className={s.active}>Cocktail Settings</div>
            </div>
          </div>
          <div className={s.vendor_setting_content}>
            <VendorCocktailSettings vendor={vendor} />
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

export default withStyles(s)(VendorAdminCocktailsDisplay);
