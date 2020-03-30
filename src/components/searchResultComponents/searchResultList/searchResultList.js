import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './searchResultList.scss';

import {useMutation, useQuery} from "graphql-hooks";

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
`
function SearchResultList() {
  const { loading, error, data } = useQuery(const SearchBarsQuery)
if (loading) return 'Loading...'
if (error) return 'Something Bad Happened'

    return (
      {data.bars.map(({ name, distance, opt }) => (
      <div>
        <div className={s.list_item_meta}>
          <div className={s.search_result_list_item}>
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



        <div className={s.list_item_meta}>
          <div className={s.search_result_list_item}>
            <div className={s.bar_name}>Urbana</div>
            <div className={s.distance}>.25 miles away</div>
            <div className={s.sale_options}>
              <div className={s.order_link}>Order Online</div>
              <div className={s.availability}>Delivery or Pickup</div>
            </div>
          </div>
        </div>

        <div className={s.list_item_meta}>
          <div className={s.search_result_list_item}>
            <div className={s.bar_name}>Reveller's Hour</div>
            <div className={s.distance}>.5 miles away</div>
            <div className={s.sale_options}>
              <div className={s.order_link}>Order Online</div>
              <div className={s.availability}>Delivery or Pick-up</div>
            </div>
          </div>
        </div>

        <div className={s.list_item_meta}>
          <div className={s.search_result_list_item}>
            <div className={s.bar_name}>Columbia Room</div>
            <div className={s.distance}>1 miles away</div>
            <div className={s.sale_options}>
              <div className={s.availability}>Pick-up</div>
            </div>
          </div>
        </div>

        <div className={s.list_item_meta}>
          <div className={s.search_result_list_item}>
            <div className={s.bar_name}>Chez Billy Sud</div>
            <div className={s.distance}>.25 miles away</div>
            <div className={s.sale_options}>
              <div className={s.order_link}>Order Online</div>
              <div className={s.availability}>Delivery | Pick-up</div>
            </div>
          </div>
        </div>

        <div className={s.list_item_meta}>
          <div className={s.search_result_list_item}>
            <div className={s.bar_name}>Urbana</div>
            <div className={s.distance}>.25 miles away</div>
            <div className={s.sale_options}>
              <div className={s.order_link}>Order Online</div>
              <div className={s.availability}>Delivery | Pick-up</div>
            </div>
          </div>
        </div>

        <div className={s.list_item_meta}>
          <div className={s.search_result_list_item}>
            <div className={s.bar_name}>Urbana</div>
            <div className={s.distance}>.25 miles away</div>
            <div className={s.sale_options}>
              <div className={s.order_link}>Order Online</div>
              <div className={s.availability}>Delivery | Pick-up</div>
            </div>
          </div>
        </div>

      </div>
        )}
}

export default withStyles(s)(SearchResultList);
