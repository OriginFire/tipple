import React from 'react';
import VendorAdminCocktails from './VendorAdminCocktails';
import Layout from '../../components/sitewideDisplayComponents/Layout';

async function action(route) {
  const id = route.params.id;
  return {
    title: '',
    component: (
      <Layout>
        <VendorAdminCocktails id={id}/>
      </Layout>
    ),
  };
}

export default action;
