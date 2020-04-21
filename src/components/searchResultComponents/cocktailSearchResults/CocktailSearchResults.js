import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './CocktailSearchResults.scss';
import Link from '../../utilityComponents/link';
import db from '../../../data/dbSimulator/bars';
import history from "../../../history";

class CocktailSearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: {
        pickupRadius: 1,
        doesDelivery: true,
        doesPickup: true,
      },
    };
    this.storeLinkClick = this.storeLinkClick.bind(this);
  }

  resultsMessage(resultsArray) {
    let miles;
    if (this.state.searchFilter.pickupRadius === 1) {
      miles = 'mile';
    } else {
      miles = 'miles';
    }

    if (resultsArray.length === 0) {
      return (
        <div className={s.results_message}>
          <div>There are no cocktails available for delivery to your current address, however nearby vendors may sell cocktails for pickup.</div>
          <br />
          <div>We checked for cocktails available for pickup within {this.state.searchFilter.pickupRadius.toString()} {miles} and found none, but you can adjust that distance by clicking the filter settings button below.</div>
        </div>
      )
    } else {
      return (
        <div className={s.results_message}>
          <div>
            Cocktails available for delivery to your current address or pickup within {this.state.searchFilter.pickupRadius.toString()} {miles}
          </div>
        </div>
      )
    }
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
        {this.resultsMessage(availableVendors)}
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
                  <div className={s.ingredients}>
                    {cocktail.ingredients}
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
