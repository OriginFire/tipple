import React, { useState } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorAdminConsole.scss';
import history from '../../../history';

function VendorAdminConsole(props) {
  const { vendor } = props;
  const [activeTab, setActiveTab] = useState(props.active);

  let generalStatus = s.inactive;
  let serviceStatus = s.inactive;
  let cocktailStatus = s.inactive;
  let userStatus = s.inactive;

  switch (activeTab) {
    case 'general':
      generalStatus = s.active;
      break;

    case 'service':
      serviceStatus = s.active;
      break;

    case 'cocktail':
      cocktailStatus = s.active;
      break;

    case 'user':
      userStatus = s.active;
      break;
  }

  return (
    <div className={s.context_control}>
      <div className={s.vendor_name}>{vendor.dbaName}</div>

      <h2 className={s.result_explainer}>
        Here you can manage {vendor.dbaName}'s account details (user info,
        online service settings, cocktails, etc.)
      </h2>

      <div className={s.display_selectors}>
        <div
          className={generalStatus}
          onClick={e => history.push(`/vendor-admin/${vendor.slug}`)}
        >
          General Information
        </div>
        <div
          className={serviceStatus}
          onClick={e => history.push(`/vendor-admin-service/${vendor.slug}`)}
        >
          Service Settings
        </div>

        <div
          className={cocktailStatus}
          onClick={e => history.push(`/vendor-admin-cocktails/${vendor.slug}`)}
        >
          Cocktail Selection
        </div>

        <div
          className={userStatus}
          onClick={e => history.push(`/vendor-admin-user/${vendor.slug}`)}
        >
          Account User
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(VendorAdminConsole);
