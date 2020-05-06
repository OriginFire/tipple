import React from 'react';
import VendorUser from "./VendorUser";
import Layout from '../../components/sitewideDisplayComponents/Layout';

async function action(route) {
  const slug = route.params.slug;
  return {
    title: '',
    component: (
      <Layout>
        <VendorUser slug={slug}/>
      </Layout>
    ),
  };
}

export default action;
