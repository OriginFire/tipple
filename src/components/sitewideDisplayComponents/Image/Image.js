import {useQuery} from "graphql-hooks";

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';


const GET_IMAGE = `
  query GetImage(
  $ImageId: $String) {
    getImage(parameters: {
    ImageId: $ImageId
    }) {
     image
    }
  }
`;

export default function Image(props) {

  const { loading, error, data } = useQuery(GET_IMAGE, {
    variables: {
      imgId: props.ImageId
    },
  });


  if (loading) return <div>Searching...</div>;
  if (error) return <div>Something bad happened...</div>;
  if (data)
  return (
    <img
      className={props.classNamePass}
      src={data.image}
      alt={`${props.cocktailName} Image`}
  />
  );
}
