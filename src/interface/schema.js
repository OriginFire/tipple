/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import newVendor from './mutators/newVendor';
import newCocktail from './mutators/newCockail';
import updateCocktail from './mutators/updateCocktail';
import listVendors from './queries/listVendors';
import searchVendors from './queries/searchVendors';
import showCocktails from './queries/showCocktails';
import findVendor from './queries/findVendor';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      listVendors,
      searchVendors,
      showCocktails,
      findVendor,
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      newVendor,
      newCocktail,
      updateCocktail,
    },
  }),
});

export default schema;
