import React, { useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './VendorAdminService.scss';
import ContentBox from '../../sitewideDisplayComponents/contentBox/ContentBox';
import VendorConsole from '../vendorAdminConsole/VendorAdminConsole';
import VendorServiceSettings from './ServiceSettings';
import ApplicationContext from '../../ApplicationContext';

const FIND_VENDOR = `
  query FindVendor($slug: String!, $JWT: String!) {
    protectedFindVendor(vendor: { slug: $slug, JWT: $JWT}) {
      slug
      dbaName
      longitude
      latitude
      doesDelivery
      deliveryRadius
      scheduledDeliveryRequired
      minimumDeliveryFulfillment
      doesPickup
      scheduledPickupRequired
      minimumPickupFulfillment
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

function VendorAdminGeneral(props) {
  const authenticationContext = useContext(ApplicationContext);

  const { loading, error, data } = useQuery(FIND_VENDOR, {
    variables: { slug: props.pathId, JWT: authenticationContext.context.JWT },
  });
  let vendor;

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';
  if (data) {
    vendor = data.protectedFindVendor;
    console.log("hello!", data.protectedFindVendor);
  }

  return (
    <ContentBox>
      <VendorConsole vendor={vendor} active="service" />
      <div className={s.vendor_setting_content}>
        <VendorServiceSettings vendor={vendor} />
      </div>
    </ContentBox>
  );
}

export default withStyles(s)(VendorAdminGeneral);
