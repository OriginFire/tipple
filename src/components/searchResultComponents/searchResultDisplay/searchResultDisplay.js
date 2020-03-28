import React from 'react';
import withStyles from "isomorphic-style-loader/withStyles";
import s from './searchResultDisplay.scss';
import SearchResultList from "../searchResultList/searchResultList";
import PrimaryButton from "../../displayComponents/buttonComponents/primaryButton/PrimaryButton";
import SecondaryButton from "../../displayComponents/buttonComponents/secondaryButton/SecondaryButton";
import Link from '../../utilityComponents/link/Link';

class SearchResultDisplay extends React.Component {
  render() {
    return (
      <div>
        <div className={s.search_result_content}>
          <h2 className={s.result_explainer}>
            These bars in your area sell cocktails for delivery or pickup
          </h2>
          <div className={s.list}>
            <SearchResultList />
          </div>
        </div>
        <div className={s.buttons}>
          <Link to="/partner" >
            <PrimaryButton text={"Add A Bar"} />
          </Link>
          <Link to="/finder" >
            <SecondaryButton text={"Return To Search"}/>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SearchResultDisplay);
