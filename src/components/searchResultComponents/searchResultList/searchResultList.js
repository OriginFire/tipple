import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation, useQuery } from 'graphql-hooks';
import s from './searchResultList.scss';
import Link from '../../utilityComponents/link';

const SearchBarsQuery = `
  mutation SearchBars(
  $physicalStreetAddress: String!,
  $physicalCity: String!,
  $physicalState: String!,
  $physicalZipCode: String!,
)
  {
    searchBars(bar:{
    physicalStreetAddress: $physicalStreetAddress,
    physicalCity: $physicalCity,
    physicalState: $physicalState,
    physicalZipCode: $physicalZipCode,
  ) {
      dbaName
      distance
      deliveryRadius
      onlineOrdering
    }
  }
`;

function SearchResultList() {
  /**
  const { loading, error, data } = useQuery(SearchBarsQuery)
if (loading) return 'Loading...'
if (error) return 'Something Bad Happened'

    return (
      {data.bars.map(({ name, distance, opt }) => (
      <div>
        <div className={s.list_item_meta}>
          <div className={s.list_item}>
            <div className={s.bar_name}>{name}</div>
            <div className={s.distance}>{distance}</div>
            <div className={s.sale_options}>
              {if(opts.order)}
              <div className={s.order_link}>Order Online</div>
              {end}
              <div className={s.availability}>Delivery or Pickup</div>
            </div>
          </div>
        </div>

    */
  return (
    <div className={s.result_list}>
      <Link className={s.list_item} to="/vendor/test">
        <img className={s.bar_image} src="../../../Urbana.jpg" />
        <div className={s.result_text}>
          <div className={s.bar_name}>Urbana</div>
          <div className={s.distance}>2000 21st St. NW, Washington, DC</div>
          <div className={s.distance}>(.25 miles away)</div>
          <div className={s.sale_options}>
            <div className={s.order_link}>Order Online</div>
            <div className={s.availability}>Delivery or Pickup</div>
          </div>
        </div>
      </Link>

      <div className={s.list_item}>
        <img className={s.bar_image} src="../../../SL.jpeg" />
        <div className={s.result_text}>
          <div className={s.bar_name}>Reveler's Hour</div>
          <div className={s.distance}>2000 21st St. NW, Washington, DC</div>
          <div className={s.distance}>.5 miles away</div>
          <div className={s.sale_options}>
            <div className={s.order_link}>Order Online</div>
            <div className={s.availability}>Delivery or Pick-up</div>
          </div>
        </div>
      </div>
      <div className={s.list_item}>
        <img className={s.bar_image} src="../../../Columbia.jpg" />
        <div className={s.result_text}>
          <div className={s.bar_name}>Columbia Room</div>
          <div className={s.distance}>2000 21st St. NW, Washington, DC</div>
          <div className={s.distance}>1 miles away</div>
          <div className={s.sale_options}>
            <div className={s.availability}>Pick-up</div>
          </div>
        </div>
      </div>

      <div className={s.list_item}>
        <img className={s.bar_image} src="../../../Urbana.jpg" />
        <div className={s.result_text}>
          <div className={s.bar_name}>Chez Billy Sud</div>
          <div className={s.distance}>2000 21st St. NW, Washington, DC</div>
          <div className={s.distance}>.25 miles away</div>
          <div className={s.sale_options}>
            <div className={s.order_link}>Order Online</div>
            <div className={s.availability}>Delivery | Pick-up</div>
          </div>
        </div>
      </div>
      <div className={s.list_item}>
        <img className={s.bar_image} src="../../../SL.jpeg" />
        <div className={s.result_text}>
          <div className={s.bar_name}>Urbana</div>
          <div className={s.distance}>2000 21st St. NW, Washington, DC</div>
          <div className={s.distance}>.25 miles away</div>
          <div className={s.sale_options}>
            <div className={s.order_link}>Order Online</div>
            <div className={s.availability}>Delivery | Pick-up</div>
          </div>
        </div>
      </div>
      <div className={s.list_item}>
        <img className={s.bar_image} src="../../../Columbia.jpg" />
        <div className={s.result_text}>
          <div className={s.bar_name}>Urbana</div>
          <div className={s.distance}>2000 21st St. NW, Washington, DC</div>
          <div className={s.distance}>.25 miles away</div>
          <div className={s.sale_options}>
            <div className={s.order_link}>Order Online</div>
            <div className={s.availability}>Delivery | Pick-up</div>
          </div>
        </div>
      </div>
    </div>
  );
  /** } */
}

export default withStyles(s)(SearchResultList);
