import React from 'react';
import Home from './Home';
import Layout from '../../components/sitewideDisplayComponents/Layout';

async function action() {
  return {
    title: '',
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  };
}

export default action;
