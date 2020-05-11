import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorDataAlert.scss';

function VendorDataAlert(props) {
  const { vendor } = props;
  const conditionalAlerts = [
    [vendor.image === '', 'A vendor image'],
    [vendor.dbaName === '', 'The vendor business name'],
    [vendor.alcoholLicenseNumber === '', "The vendor's alcohol license number"],
    [vendor.alcoholLicenseIssuingAgency === '', "The alcohol agency that issued the vendor's license"],
    [vendor.alcoholLicenseExpiration === '', "The expiration date of the alcohol license"],
    [!vendor.doesDelivery && !vendor.doesPickup, "Delivery and/or pickup service settings"],
    [vendor.onlineStore === '', "A link to the online store"],
    [vendor.cocktails.length === 0, "At least one cocktail"]
  ];
  const [completion, setCompletion] = useState(conditionalAlerts.every(v => v[0] === false));

  function ActiveAlerts() {
    if (!completion) {
      return (
        <div>
          <div className={s.explainer}>
            Currently, this account is missing required information and will not
            appear in search results on the site.
          </div>
          <br />
          <div className={s.explainer}>
            To correct this, please upload the following:
            <ul>
              {conditionalAlerts.map((condition) => {
                if (condition[0]) {
                  return (
                    <li className={s.to_do}>{condition[1]}</li>
                  )
                }
              })}
            </ul>
          </div>
        </div>
      );
    }
  }

  return <div>{ActiveAlerts()}</div>;
}

export default withStyles(s)(VendorDataAlert);
