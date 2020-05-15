import React, { useContext, useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './VendorResultsList.scss';
import ApplicationContext from '../../ApplicationContext';
import VendorListItem from './VendorListItem';

const SEARCH_VENDORS = `
  query SearchVendors($userLatitude: Float!, $userLongitude: Float!) {
    searchVendors(parameters: {userLatitude: $userLatitude, userLongitude: $userLongitude}) {
      slug
      dbaName
      physicalStreetAddress
      physicalCity
      physicalState
      doesDelivery
      doesPickup
      deliveryRadius
      vendorImage
      onlineStore
      cocktails {
        price
      }
    }
  }
`;

function VendorResultsList(props) {
  const customerLocation = useContext(ApplicationContext);

  const [userLatitude, setUserLatitude] = useState(
    customerLocation.context.userLatitude,
  );
  const [userLongitude, setUserLongitude] = useState(
    customerLocation.context.userLongitude,
  );
  const { loading, error, data } = useQuery(SEARCH_VENDORS, {
    variables: { userLatitude, userLongitude },
  });
  let searchResults;

  loading && <div>Loading</div>;
  error && <div>Something abd happened...</div>;
  data && (searchResults = data.searchVendors);

  function resultsMessage(resultsArray) {
    let miles;
    let vendorsText;

    props.filterSettings.pickupRadius === 1
      ? (miles = 'mile')
      : (miles = 'miles');

    if (resultsArray.length) {
      vendorsText = 'vendors';
    } else {
      vendorsText = 'vendor';
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
          {resultsArray.length} {vendorsText} deliver to your current address or
          offer pickup within {props.filterSettings.pickupRadius.toString()}{' '}
          {miles}
        </div>
      </div>
    );
  }

  return (
    <div className={s.result_list}>
      {searchResults && resultsMessage(searchResults)}
      {searchResults &&
        searchResults.map((vendor, index, vendorResults) => {
          return <VendorListItem vendor={vendor} index={index} />;
        })}
    </div>
  );
}

export default withStyles(s)(VendorResultsList);
