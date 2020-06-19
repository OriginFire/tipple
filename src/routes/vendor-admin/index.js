import React from 'react';
import VendorAdmin from './VendorAdmin';
import Layout from '../../components/sitewideDisplayComponents/Layout';

async function action(route) {
  const pathId = route.params.slug;
  return {
    title: '',
    component: (
      <Layout>
        <VendorAdmin pathId={pathId} />
      </Layout>
    ),
  };
}

export default action;
