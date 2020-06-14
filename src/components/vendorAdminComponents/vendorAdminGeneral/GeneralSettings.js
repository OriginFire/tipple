import React, { useState, useContext, useEffect } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import { useMutation } from 'graphql-hooks';
import s from './GeneralSettings.scss';
import DynamicSetting from '../dynamicSetting/DynamicSetting';
import DynamicSettingAddress from '../dynamicSetting/DynamicSettingAddress';
import VendorDataAlert from '../vendorDataAlert/VendorDataAlert';
import ApplicationContext from '../../ApplicationContext';
import Image from "../../sitewideDisplayComponents/Image";

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
  const [vendorImage, setVendorImage] = useState(vendor.ImageId);
  const [physicalAddress, setPhysicalAddress] = useState(
    vendor.physicalAddress,
  );
  const [onlineStore, setOnlineStore] = useState(vendor.onlineStore);
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

  console.log(latitude, longitude, physicalAddress);

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
    if (vendorImage) {
      return (
        <div className={s.vendor_image}>
          <Image
            ImageId={vendorImage}
            alt={dbaName}
          />
        </div>
      );
    }
    return <div className={s.vendor_image} />;
  }

  function loadfile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      setVendorImage( reader.result);
    }, false);

    if (file) {
      //read image file to base64 string
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className={s.settings_content}>
      <VendorDataAlert vendor={vendor} />

      <DynamicSettingImage />
      <input className={s.image_upload} type="file" onChange={loadfile} />

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
        settingName="Online Store"
        settingValue={onlineStore}
        settingSave={newValue => setOnlineStore(newValue)}
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
