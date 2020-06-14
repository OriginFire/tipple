import React, { useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './IndividualVendorDisplay.scss';
import IndividualVendorCocktails from './individualVendorCocktails/IndividualVendorCocktails';
import ContentBox from '../../sitewideDisplayComponents/contentBox/ContentBox';
import AvailabilityData from '../availabilityData/AvailabilityData';
import startTimeRendering from '../../../consts/startTimeRendering';
import endTimeRendering from '../../../consts/endTimeRendering';
import SearchContext from '../SearchContext';

const FIND_VENDOR = `
  query FindVendor($slug: String!) {
    findVendor(vendor: { slug: $slug }) {
      physicalStreetAddress
      physicalCity
      dbaName
      doesDelivery
      minimumDeliveryFulfillment
      deliveryRadius
      doesPickup
      minimumPickupFulfillment
      cocktails {
        slug
        name
        ingredients
        ImageId
        price
        servingSize
        profile
        description
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

function IndividualVendorDisplay(props) {
  const { loading, error, data } = useQuery(FIND_VENDOR, {
    variables: { slug: props.slug },
  });
  const searchContext = useContext(SearchContext);
  let vendor;
  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';
  if (data) {
    console.log(data.findVendor);
    vendor = data.findVendor;
  }

  let availability;
  const scheduleStatus = s.schedule_status;

  if (data.findVendor) {
    if (vendor.doesDelivery === true && vendor.doesPickup === true) {
      availability =
        ' available for pickup or delivery to your current address';
    } else if (vendor.doesDelivery === true && vendor.doesPickup === false) {
      availability =
        ' available for delivery to your current address, but not pickup';
    } else {
      availability =
        ' available for pickup, but not delivery to your current address';
    }
  }

  const availabilityData = new AvailabilityData(
    vendor.Availabilities,
    searchContext.searchFilters,
    vendor,
  );
  const availabilityStatus = availabilityData.getAvailabilityStatus();
  const availabilityTime = availabilityData.getAvailabilityTime();

  return (
    <div>
      {data.findVendor && (
        <ContentBox>
          <div className={s.text}>
            <div className={s.vendor_name}>{vendor.dbaName}</div>
            {availabilityStatus === 'Available Today' && (
              <span className={s.schedule}>
                <span className={scheduleStatus}>{availabilityStatus} </span>
                until {endTimeRendering(availabilityTime)}
              </span>
            )}

            {availabilityStatus !== 'Available Today' && (
              <span className={s.schedule}>
                <span className={scheduleStatus}>{availabilityStatus} </span>
                at {startTimeRendering(availabilityTime)}
              </span>
            )}
            <div className={s.address}>
              {`${vendor.physicalStreetAddress}, ${vendor.physicalCity}`}
            </div>
          </div>

          <IndividualVendorCocktails
            cocktails={vendor.cocktails}
            vendor={vendor}
          />
        </ContentBox>
      )}
    </div>
  );
}

export default withStyles(s)(IndividualVendorDisplay);
