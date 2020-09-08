import withStyles from 'isomorphic-style-loader/withStyles';
import React, {useContext, useState} from 'react';
import { useCookies } from 'react-cookie';
import { useMutation } from 'graphql-hooks';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import s from './VendorSignupForm.scss';
import ContentBox from '../../sitewideDisplayComponents/contentBox/ContentBox';
import FormField from '../../sitewideDisplayComponents/formField';
import AddressFormField from '../../utilityComponents/addressFormField/AddressFormField';
import VendorFormStatus from './VendorFormStatus';
import VendorFormButtons from './VendorFormButtons';
import history from '../../../history';
import jwt from "jsonwebtoken";
import ApplicationContext from "../../ApplicationContext";

const CREATE_VENDOR_MUTATION = `
  mutation CreateVendor($dbaName: String!,
  $adminName: String!,
  $adminEmail: String!,
  $adminPhone: String!,
  $adminPassword: String!,
  $physicalAddress: String!,
  $latitude: Float!,
  $longitude: Float!,
  $alcoholLicenseNumber: String!,
  $alcoholLicenseIssuingAgency: String!,
  $alcoholLicenseExpiration: String!)
  {
    newVendor(vendor:{
    dbaName: $dbaName,
    adminName: $adminName,
    adminEmail: $adminEmail,
    adminPhone: $adminPhone,
    adminPassword: $adminPassword,
    physicalAddress: $physicalAddress,
    latitude: $latitude,
    longitude: $longitude,
    alcoholLicenseNumber: $alcoholLicenseNumber,
    alcoholLicenseIssuingAgency: $alcoholLicenseIssuingAgency,
    alcoholLicenseExpiration: $alcoholLicenseExpiration}) {
      slug
      JWT
    }
  }
`;

function VendorSignupForm() {
  const [dbaName, setDbaName] = useState('');
  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminPhone, setAdminPhone] = useState('');
  const [entityName, setEntityName] = useState('');
  const [physicalAddress, setPhysicalAddress] = useState('');
  const [physicalStreetAddress, setPhysicalStreetAddress] = useState('');
  const [physicalCity, setPhysicalCity] = useState('');
  const [physicalState, setPhysicalState] = useState('');
  const [physicalZipCode, setPhysicalZipCode] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [alcoholLicenseNumber, setAlcoholLicenseNumber] = useState('');
  const [
    alcoholLicenseIssuingAgency,
    setAlcoholLicenseIssuingAgency,
  ] = useState('');
  const [alcoholLicenseExpiration, setAlcoholLicenseExpiration] = useState('');
  const [formStage, setFormStage] = useState(1);
  const [cookies, setCookie] = useCookies(['jwt']);
  const [errorMsg, setErroMsg] = useState('');

  const [createVendor] = useMutation(CREATE_VENDOR_MUTATION);
  const authenticationContext = useContext(ApplicationContext);

  function addressSelection(address) {
    setPhysicalAddress(address);
    geocodeByAddress(address).then(geoResults => {
      getLatLng(geoResults[0]).then(lLResults => {
        setLatitude(lLResults.lat);
        setLongitude(lLResults.lng);
      });
    });
  }

  function isVendorValid() {
    // test phone
    const valid = RegExp('([0-9]{3})-[0-9]{3}-[0-9]{4}').test(adminPhone);

    return valid;
  }

  async function createNewVendor() {
    // if (!isVendorValid()) {
    //  setErroMsg("Formatting Error - Check Fields");
    //  return;
    // }
    const res = await createVendor({
      variables: {
        dbaName,
        adminName,
        adminEmail,
        adminPhone,
        adminPassword,
        physicalAddress,
        physicalStreetAddress,
        physicalCity,
        physicalState,
        physicalZipCode,
        latitude,
        longitude,
        alcoholLicenseNumber,
        alcoholLicenseIssuingAgency,
        alcoholLicenseExpiration,
      },
    });
    console.log(res);
    authenticationContext.context.JWT = res.data.newVendor.JWT;
    setCookie('jwt', res.data.newVendor.JWT);
    const decoded = jwt.decode(res.data.newVendor.JWT);
    history.push(`/vendor-admin/${decoded.vendorSlug}`);
  }

  // TODO: reactor this
  return (
    <ContentBox>
      <div className={s.form_explainer}>
        List your cocktail delivery or takeout business on Tipple. {errorMsg}
      </div>
      <div className={s.form}>
        <VendorFormStatus
          formStage={formStage}
          formStageChange={newStage => setFormStage(newStage)}
        />

        {(() => {
          switch (formStage) {
            case 1:
              return (
                <form className={s.partner_form_fields}>
                  <FormField
                    placeholder="Full Name"
                    onChange={e => setAdminName(e.target.value)}
                    type="text"
                    value={adminName}
                  />
                  <FormField
                    placeholder="Email Address"
                    onChange={e => setAdminEmail(e.target.value)}
                    type="email"
                    value={adminEmail}
                  />
                  <FormField
                    placeholder="Password"
                    onChange={e => setAdminPassword(e.target.value)}
                    type="password"
                    value={adminPassword}
                  />
                  <FormField
                    placeholder="Phone Number"
                    onChange={e => setAdminPhone(e.target.value)}
                    type="tel"
                    value={adminPhone}
                    maxlength="12"
                  />
                </form>
              );

            case 2:
              return (
                <form className={s.partner_form_fields}>
                  <AddressFormField
                    placeholder="Business Address"
                    value={physicalAddress}
                    onAddressSelection={addressSelection}
                  />
                  <FormField
                    placeholder="Business Name (D.B.A.)"
                    onChange={e => setDbaName(e.target.value)}
                    type="text"
                    value={dbaName}
                  />
                  <FormField
                    placeholder="Legal Entity Name"
                    onChange={e => setEntityName(e.target.value)}
                    type="text"
                    value={entityName}
                  />
                </form>
              );

            case 3:
              return (
                <form className={s.partner_form_fields}>
                  <FormField
                    placeholder="Alcohol License #"
                    onChange={e => setAlcoholLicenseNumber(e.target.value)}
                    value={alcoholLicenseNumber}
                  />
                  <FormField
                    placeholder="Issuing Agency"
                    onChange={e =>
                      setAlcoholLicenseIssuingAgency(e.target.value)
                    }
                    value={alcoholLicenseIssuingAgency}
                  />
                  <FormField
                    placeholder="Expiration Date"
                    onChange={e => setAlcoholLicenseExpiration(e.target.value)}
                    value={alcoholLicenseExpiration}
                  />
                </form>
              );
          }
        })()}
        <VendorFormButtons
          formStage={formStage}
          formStageChange={newStage => setFormStage(newStage)}
          submitForm={e => createNewVendor()}
        />
      </div>
    </ContentBox>
  );
}

export default withStyles(s)(VendorSignupForm);
