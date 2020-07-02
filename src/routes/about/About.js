import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './About.scss';
import AboutPage from "../../components/aboutPage/AboutPage";

class About extends React.Component {
  render() {
    return (
      <div>
        <AboutPage />
      </div>
    );
  }
}

export default withStyles(s)(About);
