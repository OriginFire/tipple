/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';

import StyleContext from 'isomorphic-style-loader/StyleContext';
import { ClientContext, GraphQLClient } from 'graphql-hooks';
import ApplicationContext from './ApplicationContext';
import SearchContext from './searchResultComponents/SearchContext';
import searchFilters from './searchResultComponents/SearchFilters';
import { CookiesProvider } from 'react-cookie';


/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context} insertCss={() => {}}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */

export default function App({ context, insertCss, children }) {
  const client = new GraphQLClient({ url: '/graphql', fetch: context.fetch });
  // NOTE: If you need to add or modify header, footer etc. of the app,
  // please do that inside the Layout component.
  return (
    <StyleContext.Provider value={{ insertCss }}>
      <ApplicationContext.Provider value={{ context }}>
        <ClientContext.Provider value={client}>
          <SearchContext.Provider value={{ searchFilters }}>
            <CookiesProvider>
              {React.Children.only(children)}
            </CookiesProvider>
          </SearchContext.Provider>
        </ClientContext.Provider>
      </ApplicationContext.Provider>
    </StyleContext.Provider>
  );
}

App.propTypes = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
  context: PropTypes.shape({
    // Universal HTTP client
    fetch: PropTypes.func.isRequired,
    pathname: PropTypes.string.isRequired,
    query: PropTypes.object,
  }).isRequired,
  children: PropTypes.element.isRequired,
};
