import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation, useQuery } from 'graphql-hooks';
import s from './searchResultList.scss';
import history from "../../../history";
import db from '../../../data/dbSimulator/bars';

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

class SearchResultList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onVendorClick = this.onVendorClick.bind(this);
  }

  onVendorClick(vendor) {
    if (!vendor) {
      return;
    }
    history.push(`/vendor/${vendor.id}`);
  }

  render() {
    let availability;

    if (db[0].doesPickup === true && db[0].doesDelivery === true) {
      availability = 'Delivery or Pickup';
    } else if (db[0].doesPickup === false && db[0].doesDelivery === true) {
      availability = 'Delivery Only';
    } else {
      availability = 'Pickup Only';
    }
    /**
     const { loading, error, data } = useQuery(SearchBarsQuery)

     if (loading) return 'Loading...'
     if (error) return 'Something Bad Happened'
     */
    return (
      <div className={s.result_list}>
        {db.map((vendor, index) => {
          return (
            <div
              className={s.list_item}
              onClick={e => this.onVendorClick(vendor)}
            >
              <img className={s.bar_image} src="../../../Urbana.jpg" />
              <div className={s.result_text}>
                <div className={s.bar_name}>{vendor.dbaName}</div>
                <div className={s.distance}>
                  {`${vendor.physicalStreetAddress}, ${vendor.physicalCity}`}
                </div>
                <div className={s.distance}>(.25 miles away)</div>
                <div className={s.sale_options}>
                  <div className={s.order_link}>Order Online</div>
                  <div className={s.availability}>{availability}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withStyles(s)(SearchResultList);
