/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/contact',
      load: () => import(/* webpackChunkName: 'contact' */ './contact'),
    },
    {
      path: '/login',
      load: () => import(/* webpackChunkName: 'login' */ './login'),
    },
    {
      path: '/register',
      load: () => import(/* webpackChunkName: 'register' */ './register'),
    },
    {
      path: '/search-results',
      load: () => import(/* webpackChunkName: 'contact' */ './search-results'),
    },
    {
      path: '/vendor/:slug',
      load: () => import(/* webpackChunkName: 'register' */ './vendor'),
    },
    {
      path: '/vendor-admin/:slug',
      load: () => import('./vendor-admin'),
    },
    {
      path: '/vendor-admin-service/:slug',
      load: () => import('./vendor-admin-service'),
    },
    {
      path: '/vendor-admin-cocktails/:slug',
      load: () => import('./vendor-admin-cocktails'),
    },
    {
      path: '/vendor-admin-user/:slug',
      load: () => import('./vendor-admin-user'),
    },
    {
      path: '/vendor-create',
      load: () => import(/* webpackChunkName: 'register' */ './vendor-create'),
    },
    {
      path: '/vendor-login',
      load: () => import(/* webpackChunkName: 'register' */ './vendor-login'),
    },
    {
      path: '/about',
      load: () => import(/* webpackChunkName: 'aboutPage' */ './about'),
    },
    {
      path: '/admin',
      load: () => import(/* webpackChunkName: 'admin' */ './admin'),
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them returns the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = 'Tipple Supply Co. | Mixology In A Bottle';
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
