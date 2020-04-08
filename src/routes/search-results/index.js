import React from 'react';
import Layout from '../../components/sitewideDisplayComponents/Layout';
import SearchResults from './SearchResults';

function action() {
  return {
    title: [''],
    component: (
      <Layout>
        <SearchResults />
      </Layout>
    ),
  };
}

export default action;
