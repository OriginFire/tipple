import React from 'react';
import VendorAdmin from './VendorAdmin';
import Layout from '../../components/sitewideDisplayComponents/Layout';
import jwt from "jsonwebtoken";

async function action(route) {
  const pathId = route.params.slug;
  const decoded = jwt.decode(route.JWT);
  console.log(decoded);

  console.log(`auth user = ${decoded.vendorSlug}`);
  console.log(`path = ${pathId}`);
  console.log(route);

  if (decoded.vendorSlug !== pathId) {
    return { redirect: '/vendor-login' }
  };

  return {
    title: '',
    component: (
      <Layout>
        <VendorAdmin pathId={pathId}/>
      </Layout>
    ),
  };
}

export default action;
