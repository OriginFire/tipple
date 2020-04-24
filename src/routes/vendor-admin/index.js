import React from 'react';
import VendorAdmin from './VendorAdmin';
import Layout from '../../components/sitewideDisplayComponents/Layout';

async function action(route) {
  const pathId = route.params.id;
  const authenticatedUser = route.authenticatedUser;
  console.log(authenticatedUser);

  if (authenticatedUser !== pathId) {
    return { redirect: '/vendor-login' }
  };

  return {
    title: '',
    component: (
      <Layout>
        <VendorAdmin id={pathId}/>
      </Layout>
    ),
  };
}

export default action;
