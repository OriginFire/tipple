import React, { useState, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation, useQuery } from 'graphql-hooks';
import s from './VendorAdminCocktails.scss';
import CocktailSettingList from './CocktailSettingList';
import ApplicationContext from '../../ApplicationContext';
import VendorConsole from '../vendorAdminConsole/VendorAdminConsole';

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

function VendorAdminCocktails(props) {
  const authenticationContext = useContext(ApplicationContext);
  const { loading, error, data } = useQuery(FIND_VENDOR, {
    variables: { slug: props.slug, JWT: authenticationContext.context.JWT },
  });

  let vendor;

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';
  if (data) {
    vendor = data.protectedFindVendor;
  }

  return (
    <div className={s.container}>
      {vendor && (
        <div className={s.vendor_admin_display}>
          <VendorConsole vendor={vendor} active="cocktail" />
          <div className={s.vendor_setting_content}>
            <CocktailSettingList vendor={vendor} />
          </div>
        </div>
      )}
    </div>
  );
}

export default withStyles(s)(VendorAdminCocktails);
