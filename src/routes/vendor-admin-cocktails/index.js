import React from 'react';
import VendorAdminCocktails from './VendorAdminCocktails';
import Layout from '../../components/sitewideDisplayComponents/Layout';

async function action(route) {
  const slug = route.params.slug;
  return {
    title: '',
    component: (
      <Layout>
        <VendorAdminCocktails slug={slug}/>
      </Layout>
    ),
  };
}

export default action;
