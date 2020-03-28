import React from 'react';
import withStyles from "isomorphic-style-loader/withStyles";
import s from './SearchResults.scss';
import SearchResultDisplay from "../../components/searchResultComponents/searchResultDisplay/searchResultDisplay";

class SearchResults extends React.Component {
  render() {
    return <SearchResultDisplay />;
  }
}

export default withStyles(s)(SearchResults);
