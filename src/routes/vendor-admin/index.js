import React from 'react';
import VendorAdmin from './VendorAdmin';
import Layout from '../../components/sitewideDisplayComponents/Layout';
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

async function action(route) {
  const pathId = route.params.slug;
  // const decoded = jwt.decode(JWT);

  // console.log(`auth user = ${decoded.vendorSlug}`);
  console.log(`path = ${pathId}`);
  console.log(route);

  // if (decoded.vendorSlug !== pathId) {
  //   return { redirect: '/vendor-login' }
  // };

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
