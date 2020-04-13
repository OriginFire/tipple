import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './CocktailSearchResults.scss';
import Link from "../../utilityComponents/link";

class CocktailSearchResults extends React.Component {
  render() {
    return (
      <div className={s.result_list}>
        <div className={s.list_item}>
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
        </div>
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
  }
}

export default withStyles(s)(CocktailSearchResults);
