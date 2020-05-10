import React, { useState, useContext } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation } from 'graphql-hooks';
import s from './GeneralSettings.scss';
import DynamicSetting from '../dynamicSetting/DynamicSetting';
import VendorDataAlert from '../vendorDataAlert/VendorDataAlert';
import ApplicationContext from '../../ApplicationContext';

const UPDATE_VENDOR = `
  mutation UpdateVendor(
    $slug: String!,
    $JWT: String,
    $dbaName: String!,
    $physicalAddress: String!,
    $latitude: Float!,
    $longitude: Float!,
    $alcoholLicenseNumber: String!,
    $alcoholLicenseIssuingAgency: String!,
    $alcoholLicenseExpiration: String!) {
    protectedUpdateVendor(vendor: {
      slug: $slug,
      JWT: $JWT,
      dbaName: $dbaName,
      physicalAddress: $physicalAddress,
      latitude: $latitude,
      longitude: $longitude,
      alcoholLicenseNumber: $alcoholLicenseNumber,
      alcoholLicenseIssuingAgency: $alcoholLicenseIssuingAgency,
      alcoholLicenseExpiration: $alcoholLicenseExpiration,
    }) {
      dbaName
    }
  }
`;

function GeneralSettings(props) {
  const { vendor } = props;
  const authenticationContext = useContext(ApplicationContext);
  const [vendorSettings, setVendorSettings] = useState(vendor);
  const [slug, setSlug] = useState(vendor.slug);
  const [dbaName, setDbaName] = useState(vendor.dbaName);
  const [physicalAddress, setPhysicalAddress] = useState(
    vendor.physicalAddress,
  );
  const [latitude, setLatitude] = useState(vendor.latitude);
  const [longitude, setLongitude] = useState(vendor.longitude);
  const [alcoholLicenseNumber, setAlcoholLicenseNumber] = useState(
    vendor.alcoholLicenseNumber,
  );
  const [
    alcoholLicenseIssuingAgency,
    setAlcoholLicenseIssuingAgency,
  ] = useState(vendor.alcoholLicenseIssuingAgency);
  const [alcoholLicenseExpiration, setAlcoholLicenseExpiration] = useState(
    vendor.alcoholLicenseExpiration,
  );
  const [updateVendor] = useMutation(UPDATE_VENDOR);

  async function settingSave() {
    const update = await updateVendor({
      variables: {
        slug,
        JWT: authenticationContext.context.JWT,
        dbaName,
        physicalAddress,
        longitude,
        latitude,
        alcoholLicenseIssuingAgency,
        alcoholLicenseExpiration,
        alcoholLicenseNumber,
      },
    });
    console.log(update, "It's just the power of love");
  }

  return (
    <div className={s.settings_content}>
      <VendorDataAlert vendor={vendor} />

      <img
        src={`data:image/jpg;base64,${vendor.vendorImage}`}
        alt={vendor.dbaName}
        className={s.vendor_image}
      />

      <DynamicSetting
        settingName="Business Name (D.B.A.)"
        settingValue={vendor.dbaName}
        settingSave={e => settingSave()}
      />

      <DynamicSetting
        settingName="Venue Address"
        settingValue={vendor.physicalAddress}
      />

      <DynamicSetting
        settingName="Alcohol License #"
        settingValue={vendor.alcoholLicenseNumber}
      />

      <DynamicSetting
        settingName="Licensing Agency"
        settingValue={vendor.alcoholLicenseIssuingAgency}
      />

      <DynamicSetting
        settingName="Expiration Date"
        settingValue={vendor.alcoholLicenseExpiration}
      />
    </div>
  );
}

export default withStyles(s)(GeneralSettings);
