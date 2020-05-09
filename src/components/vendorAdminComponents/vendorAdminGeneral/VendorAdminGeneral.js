import React, { useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useQuery } from 'graphql-hooks';
import s from './VendorAdminGeneral.scss';
import VendorConsole from '../vendorAdminConsole/VendorAdminConsole';
import GeneralSettings from './GeneralSettings';
import ApplicationContext from '../../ApplicationContext';

const FIND_VENDOR = `
  query FindVendor($slug: String!, $JWT: String!) {
    protectedFindVendor(vendor: { slug: $slug, JWT: $JWT }) {
      slug
      dbaName
      physicalAddress
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
      vendorImage
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
    console.log(data);
    vendor = data.protectedFindVendor;
  }

  return (
    <div className={s.container}>
      <div className={s.vendor_admin_display}>
        <VendorConsole vendor={vendor} active="general" />
        <div className={s.vendor_setting_content}>
          <GeneralSettings vendor={vendor} />
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(VendorAdminGeneral);
