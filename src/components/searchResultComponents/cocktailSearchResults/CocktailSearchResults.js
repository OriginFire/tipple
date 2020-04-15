import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './CocktailSearchResults.scss';
import Link from '../../utilityComponents/link';
import db from '../../../data/dbSimulator/bars';
import history from "../../../history";

class CocktailSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.storeLinkClick = this.storeLinkClick.bind(this);
  }

  storeLinkClick(vendor) {
    if (!vendor) {
      return;
    }
    history.push(`/vendor/${vendor.id}`);
  }

  render() {
    const availableVendors = db; /** This needs to be set to bars matching the user search */
    let onlineOrdering;

    return (
      <div className={s.result_list}>
        {availableVendors.map((vendor, index, matchingVendors) => {
          return vendor.cocktails.map((cocktail, index, cocktails) => {
            if (vendor.onlineStore === '') {
              onlineOrdering = 'No Online Store';
            } else {
              onlineOrdering = 'Order Online';
            }
            return (
              <div className={s.list_item} onClick={e => this.storeLinkClick(vendor)}>
                <img className={s.bar_image} src={cocktail.image} />
                <div className={s.result_text}>
                  <div className={s.bar_name}>{cocktail.name}</div>
                  <div className={s.distance}>
                    {cocktail.ingredients.map((ingredient, index, cocktail) => {
                      if ((index + 1) === cocktail.length) {
                        return `${ingredient}`;
                      } else {
                        return `${ingredient}, `;
                      }
                    })}
                  </div>
                  <div className={s.sale_options}>
                    <div className={s.order_link}>{onlineOrdering}</div>
                    <div className={s.availability}>Delivery or Pickup</div>
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>
    );
  }
}

export default withStyles(s)(CocktailSearchResults);
