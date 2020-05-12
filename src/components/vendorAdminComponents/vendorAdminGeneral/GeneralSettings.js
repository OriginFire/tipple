import React, { useState, useContext, useEffect } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation } from 'graphql-hooks';
import s from './GeneralSettings.scss';
import DynamicSetting from '../dynamicSetting/DynamicSetting';
import DynamicSettingAddress from '../dynamicSetting/DynamicSettingAddress';
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
  const [uploaded, setUploaded] = useState();
  const [slug, setSlug] = useState(vendor.slug);
  const [dbaName, setDbaName] = useState(vendor.dbaName);
  const [vendorImage, setVendorImage] = useState(vendor.vendorImage);
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

  const fs = require('fs');

  function base64_encode(file) {
    // read binary data
    const bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
  }

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
  }

  useEffect(() => {
    settingSave();
  }, [
    dbaName,
    physicalAddress,
    latitude,
    longitude,
    alcoholLicenseNumber,
    alcoholLicenseExpiration,
    alcoholLicenseIssuingAgency,
  ]);

  function DynamicSettingImage() {
    console.log(vendorImage);
    if (vendorImage) {
      return (
        <img
          src={vendorImage}
          alt={dbaName}
          className={s.vendor_image}
        />
      );
    }
    return <div className={s.vendor_image} />;
  }

  // function imageHandle(event) {
  //   console.log(event.target.files[0]);
  //   let image = URL.createObjectURL(event.target.files[0]);
  //   image = btoa(image);
  //   setVendorImage(image.toString());
  // }

  function loadfile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      // convert image file to base64 string
      setVendorImage( reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className={s.settings_content}>
      <VendorDataAlert vendor={vendor} />

      <DynamicSettingImage />
      <input type="file" onChange={loadfile} />

      <DynamicSetting
        settingName="Business Name (D.B.A.)"
        settingValue={dbaName}
        settingSave={newValue => {
          setDbaName(newValue);
        }}
      />

      <DynamicSettingAddress
        settingName="Venue Address"
        settingValue={physicalAddress}
        latitude={latitude}
        longitude={longitude}
        settingSave={addressData => {
          setPhysicalAddress(addressData[0]);
          setLatitude(addressData[1]);
          setLongitude(addressData[2]);
        }}
      />

      <DynamicSetting
        settingName="Alcohol License #"
        settingValue={alcoholLicenseNumber}
        settingSave={newValue => {
          setAlcoholLicenseNumber(newValue);
        }}
      />

      <DynamicSetting
        settingName="Licensing Agency"
        settingValue={alcoholLicenseIssuingAgency}
        settingSave={newValue => {
          setAlcoholLicenseIssuingAgency(newValue);
        }}
      />

      <DynamicSetting
        settingName="Expiration Date"
        settingValue={alcoholLicenseExpiration}
        settingSave={newValue => {
          setAlcoholLicenseExpiration(newValue);
        }}
      />
    </div>
  );
}

export default withStyles(s)(GeneralSettings);
