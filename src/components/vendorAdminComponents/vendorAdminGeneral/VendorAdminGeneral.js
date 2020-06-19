import React, { useContext, useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './VendorAdminGeneral.scss';
import VendorConsole from '../vendorAdminConsole/VendorAdminConsole';
import GeneralSettings from './GeneralSettings';
import ApplicationContext from '../../ApplicationContext';
import ContentBox from "../../sitewideDisplayComponents/contentBox/ContentBox";
import { useCookies } from 'react-cookie';

const FIND_VENDOR = `
  query FindVendor($slug: String!, $JWT: String!) {
    protectedFindVendor(vendor: { slug: $slug, JWT: $JWT }) {
      slug
      dbaName
      physicalAddress
      latitude
      longitude
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
      ImageId
      cocktails {
        id
      }
    }
  }
  `;

function VendorAdminGeneral(props) {
  const [cookies, setCookie] = useCookies(['jwt']);

  const authenticationContext = useContext(ApplicationContext);
  const [vendorDisplay, setVendorDisplay] = useState();
  console.log(cookies);
  const JWT = cookies.jwt;
  console.log(authenticationContext);

  const { loading, error, data } = useQuery(FIND_VENDOR, {
    variables: { slug: props.pathId, JWT: JWT },
  });
  let vendor;

  if (loading) return 'Loading...';
  if (error) return 'Something Bad Happened';
  if (data) {
    vendor = data.protectedFindVendor;
  }

  return (
    <ContentBox>
        <VendorConsole vendor={vendor} active="general" />
        <div className={s.vendor_setting_content}>
          <GeneralSettings vendor={vendor} />
        </div>
    </ContentBox>
  );
}

export default withStyles(s)(VendorAdminGeneral);
