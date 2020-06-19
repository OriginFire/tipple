import React, { useContext } from 'react';
import { useCookies } from 'react-cookie';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './VendorAdminUser.scss';
import ContentBox from '../../sitewideDisplayComponents/contentBox/ContentBox';
import VendorConsole from '../vendorAdminConsole/VendorAdminConsole';
import UserSettings from './UserSettings';
import ApplicationContext from '../../ApplicationContext';

const FIND_VENDOR = `
  query FindVendor($slug: String!, $JWT: String!) {
    protectedFindVendor(vendor: { slug: $slug, JWT: $JWT }) {
      slug
      dbaName
      physicalStreetAddress
      physicalCity
      physicalState
      physicalZipCode
      alcoholLicenseNumber
      alcoholLicenseIssuingAgency
      alcoholLicenseExpiration
      doesDelivery
      doesPickup
      deliveryRadius
      onlineStore
    }
  }
  `;

function VendorAdminUser(props) {
  const authenticationContext = useContext(ApplicationContext);
  const [cookies, setCookies] = useCookies(['jwt']);

  const { loading, error, data } = useQuery(FIND_VENDOR, {
    variables: { slug: props.pathId, JWT: cookies.jwt },
  });
  let vendor;

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';
  if (data) {
    vendor = data.protectedFindVendor;
  }

  return (
    <ContentBox>
      <VendorConsole vendor={vendor} active="user" />
      <div className={s.vendor_setting_content}>
        <UserSettings vendorAccount={vendor} />
      </div>
    </ContentBox>
  );
}

export default withStyles(s)(VendorAdminUser);
