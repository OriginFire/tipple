import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorAdminCocktailsDisplay.scss';
import Button from '../../sitewideDisplayComponents/Button';
import db from '../../../data/dbSimulator/Vendors';;
import VendorCocktailSettings from '../vendorCocktailSettings/VendorCocktailSettings';
import ApplicationContext from "../../ApplicationContext";
import history from "../../../history";
import {useQuery} from "graphql-hooks";

const FIND_VENDOR = `
  query FindVendor($slug: String!) {
    findVendor(vendor: { slug: $slug }) {
      physicalStreetAddress
      physicalCity
      dbaName
      cocktails {
        id
        name
        ingredients
      }
    }
  }
  `;

function VendorAdminCocktailsDisplay(props) {
  const {loading, error, data} = useQuery(FIND_VENDOR, {variables: {slug: props.id}})
  console.log(data);

  function handlePrimaryClick() {
    /* Activate VendorCocktailSettings GraphQL mutator + scroll event */
  }

  let vendor;
  let primaryButtonText;

  db.map(vendorEntry => {
    if (vendorEntry.id === props.id) {
      vendor = vendorEntry;
    }
  });

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
            <div className={s.inactive} onClick={e => history.push(`/vendor-admin/${vendor.id}`)}>Account Details</div>
            <div className={s.active}>Cocktail Settings</div>
          </div>
        </div>
        <div className={s.vendor_setting_content}>
          <VendorCocktailSettings vendor={vendor} />
        </div>
        <div className={s.buttons}>
          <Button
            type="Primary"
            onClick={e => this.handlePrimaryClick()}
            text="Add A Cocktail"
          />
        </div>
      </div>
    </div>
  );
}

export default withStyles(s)(VendorAdminCocktailsDisplay);
