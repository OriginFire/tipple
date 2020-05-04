import React, {useContext} from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorAdminDisplay.scss';
import Button from '../../sitewideDisplayComponents/Button';
import db from '../../../data/dbSimulator/Vendors';
import VendorAccountDetails from '../vendorAdminAccountDisplay/VendorAccountDetails';
import ApplicationContext from "../../ApplicationContext";
import history from "../../../history";
import {useQuery} from "graphql-hooks";

const FIND_VENDOR = `
  query FindVendor($slug: String!, $JWT: String!) {
    protectedFindVendor(vendor: { slug: $slug, JWT: $JWT }) {
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

function VendorAdminDisplay(props) {
  const authenticationContext = useContext(ApplicationContext);

    let primaryButtonText;
    console.log(props);

    const { loading, error, data } = useQuery(FIND_VENDOR, {
      variables: { slug: props.pathId, JWT: authenticationContext.context.JWT },
    });
    let vendor;

  if (loading) return 'Loading...'
  if (error) return 'Something Bad Happened'

    if (data) {
      console.log(data);
      vendor = data.protectedFindVendor;
    }
    return (
      <div className={s.container}>
        <div className={s.vendor_admin_display}>
          <div className={s.context_control}>
            <div className={s.vendor_name}>{vendor.dbaName}</div>

            <h2 className={s.result_explainer}>
              Here you can manage {vendor.dbaName}'s account details (user info,
              online service settings, cocktails, etc.)
            </h2>

            <div className={s.display_selectors}>
              <div className={s.active}>Account Details</div>
              <div className={s.inactive} onClick={e => history.push(`/vendor-admin-cocktails/${vendor.id}`)}>Cocktail Settings</div>
            </div>
          </div>
          <div className={s.vendor_setting_content}>
            <VendorAccountDetails vendorAccount={vendor}/>
          </div>
        </div>
      </div>
    );
}

export default withStyles(s)(VendorAdminDisplay);


