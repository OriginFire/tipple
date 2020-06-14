import React, { useContext, useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './VendorResultsList.scss';
import ApplicationContext from '../../ApplicationContext';
import SearchContext from '../SearchContext';
import VendorListItem from './VendorListItem';
import AvailabilityData from '../availabilityData/AvailabilityData';

const SEARCH_VENDORS = `
  query SearchVendors($userLatitude: Float!, $userLongitude: Float!, $pickupRadius: Float!, $doesDelivery: Boolean!, $doesPickup: Boolean!) {
    searchVendors(parameters: {userLatitude: $userLatitude, userLongitude: $userLongitude, pickupRadius: $pickupRadius, doesDelivery: $doesDelivery, doesPickup: $doesPickup}) {
      slug
      dbaName
      physicalStreetAddress
      physicalCity
      physicalState
      doesDelivery
      minimumDeliveryFulfillment
      deliveryRadius
      doesPickup
      minimumPickupFulfillment
      ImageId
      onlineStore
      cocktails {
        price
      }
      Availabilities {
        availabilityType
        AvailabilitySchedules {
          day
          Shifts {
            startHour
            endHour
          }
        }
      }
    }
  }
`;

function VendorResultsList(props) {
  const customerLocation = useContext(ApplicationContext);
  const searchContext = useContext(SearchContext);

  const [userLatitude, setUserLatitude] = useState(
    customerLocation.context.userLatitude,
  );
  const [userLongitude, setUserLongitude] = useState(
    customerLocation.context.userLongitude,
  );
  const [filterSettings, setFilterSettings] = useState(
    searchContext.searchFilters,
  );
  const { loading, error, data } = useQuery(SEARCH_VENDORS, {
    variables: {
      userLatitude,
      userLongitude,
      doesDelivery: filterSettings.doesDelivery,
      doesPickup: filterSettings.doesPickup,
      pickupRadius: parseFloat(filterSettings.pickupRadius),
    },
  });
  let searchResults;

  loading && <div>Loading</div>;
  error && <div>Something abd happened...</div>;
  data && (searchResults = data.searchVendors);

  function resultsMessage(resultsArray) {
    let miles;
    let vendorsText;

    filterSettings.pickupRadius === 1 ? (miles = 'mile') : (miles = 'miles');

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
            {filterSettings.pickupRadius.toString()} {miles} away and found
            none, but you can adjust the search radius by clicking the filter
            settings button below.
          </div>
        </div>
      );
    }
    return (
      <div className={s.results_message}>
        <div>
          {resultsArray.length} {vendorsText} deliver to your current address or
          offer pickup within {filterSettings.pickupRadius.toString()} {miles}
        </div>
      </div>
    );
  }

  return (
    <div className={s.result_list}>
      {searchResults && resultsMessage(searchResults)}
      {searchResults &&
        searchResults.map((vendor, index, vendorResults) => {
          const availabilityData = new AvailabilityData(
            vendor.Availabilities,
            searchContext.searchFilters,
            vendor,
          );
          const availabilityStatus = availabilityData.getAvailabilityStatus();
          const availabilityTime = availabilityData.getAvailabilityTime();
          return (
            <VendorListItem
              vendor={vendor}
              key={vendor.id}
              availabilityStatus={availabilityStatus}
              availabilityTime={availabilityTime}
            />
          );
        })}
    </div>
  );
}

export default withStyles(s)(VendorResultsList);
