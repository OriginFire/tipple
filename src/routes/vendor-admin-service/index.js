import React from 'react';
import VendorService from "./VendorService";
import Layout from '../../components/sitewideDisplayComponents/Layout';

async function action(route) {
  const slug = route.params.slug;
  return {
    title: '',
    component: (
      <Layout>
        <VendorService slug={slug}/>
      </Layout>
    ),
  };
}

export default action;
