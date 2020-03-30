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

import newBar from './mutators/newBar'
import listBars from './queries/listBars'
import searchBars from './queries/searchBars'

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      listBars,
      searchBars,
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      newBar,
    },
  }),
});

export default schema;
