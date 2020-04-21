import React from 'react';
import VendorLogin from './VendorLogin';
import Layout from '../../components/sitewideDisplayComponents/Layout';

async function action(route) {
  return {
    title: '',
    component: (
      <Layout>
        <VendorLogin />
      </Layout>
    ),
  };
}

export default action;
