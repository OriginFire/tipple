import React from 'react';
import VendorAdmin from './VendorAdmin';
import Layout from '../../components/sitewideDisplayComponents/Layout';

async function action(route) {
  const id = route.params.id;
  return {
    title: '',
    component: (
      <Layout>
        <VendorAdmin id={id}/>
      </Layout>
    ),
  };
}

export default action;
