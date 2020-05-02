import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './vendorSearchResults.scss';
import history from '../../../history';

function VendorSearchResults(props) {
  function resultsMessage(resultsArray) {
    let miles;
    let vendors;

    if (props.filterSettings.pickupRadius === 1) {
      miles = 'mile';
    } else {
      miles = 'miles';
    }

    if (resultsArray.length) {
      vendors = 'vendors';
    } else {
      vendors = 'vendor';
    }

    if (resultsArray.length === 0) {
      return (
        <div className={s.results_message}>
          <div>
            There are no vendors delivering to your current address, however
            some may sell cocktails for pickup.
          </div>
          <br />
          <div>
            We checked for vendors less than{' '}
            {props.filterSettings.pickupRadius.toString()} {miles} away and
            found none, but you can adjust the search radius by clicking the
            filter settings button below.
          </div>
        </div>
      );
    }
    return (
      <div className={s.results_message}>
        <div>
          {resultsArray.length} {vendors} deliver to your current address or
          offer pickup within {props.filterSettings.pickupRadius.toString()}{' '}
          {miles}
        </div>
      </div>
    );
  }

  function availability(vendor) {
    if (vendor.doesPickup === true && vendor.doesDelivery === true) {
      return 'Delivery or Pickup';
    }
    if (vendor.doesPickup === false && vendor.doesDelivery === true) {
      return 'Delivery Only';
    }
    return 'Pickup Only';
  }
  let explainer;
  let onlineOrdering;
  const searchResults = props.results;

  /**
     const { loading, error, data } = useQuery(SearchBarsQuery)

     if (loading) return 'Loading...'
     if (error) return 'Something Bad Happened'
     */
  return (
    <div className={s.result_list}>
      {searchResults && resultsMessage(searchResults)}
      {console.log(searchResults)}

      {searchResults &&
        searchResults.map((vendor, index, vendorResults) => {
          if (vendor.onlineStore === '') {
            onlineOrdering = 'No Online Store';
          } else {
            onlineOrdering = 'Order Online';
          }

          return (
            <div
              key={index}
              className={s.list_item}
              onClick={e => history.push(`/vendor/${vendor.slug}`)}
            >
              <div className={s.crap}>
                <div className={s.bar_name}>{vendor.dbaName}</div>
                <img className={s.bar_image} src={`data:image/jpg;base64,${vendor.vendorImage}`} />
                <div className={s.cocktails}>{vendor.cocktails.length.toString()} cocktails, $6-10 / serving</div>
              </div>

              <div className={s.result_text}>
                <div className={s.availability}>{availability(vendor)}</div>
                <div className={s.address}>
                  {`${vendor.physicalStreetAddress}, ${vendor.physicalCity}`}
                </div>
                <div className={s.info}>Scheduled delivery available today</div>
                <div className={s.info}>Scheduled pickup available today until 11 PM</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default withStyles(s)(VendorSearchResults);
