import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './searchResultList.scss';

class SearchResultList extends React.Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default withStyles(s)(SearchResultList);
