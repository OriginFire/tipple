import React, { useState, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation, useQuery } from 'graphql-hooks';
import s from './VendorAdminCocktails.scss';
import CocktailSettingList from './cocktailSettingList/CocktailSettingList';
import ApplicationContext from '../../ApplicationContext';
import VendorConsole from '../vendorAdminConsole/VendorAdminConsole';
import ContentBox from '../../sitewideDisplayComponents/contentBox/ContentBox';

const FIND_VENDOR = `
  query FindVendor($slug: String!, $JWT: String!) {
    protectedFindVendor(vendor: { slug: $slug, JWT: $JWT }) {
      id
      dbaName
      slug
      cocktails {
        id
        slug
        name
        ingredients
        price
        servingSize
        profile
        description
        ImageId
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

  if (loading) return (
    <div>Test of loading return.</div>
  );
  if (error) return 'Something Bad Happened';
  if (data) {
    vendor = data.protectedFindVendor;
  }

  return (
    <div>
      {vendor && (
        <ContentBox>
          <VendorConsole vendor={vendor} active="cocktail" />
          <div className={s.vendor_setting_content}>
            <CocktailSettingList vendor={vendor} />
          </div>
        </ContentBox>
      )}
    </div>
  );
}

export default withStyles(s)(VendorAdminCocktails);
