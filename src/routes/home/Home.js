import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './Home.scss';
import LandingText from '../../components/displayComponents/landingText/LandingText';
import LandingButtons from '../../components/displayComponents/buttonComponents/landingButtons/LandingButtons';

class Home extends React.Component {
  render() {
    return (
      <div className={s.landing_content}>
        <LandingText />
        <LandingButtons />
      </div>
    );
  }
}

export default withStyles(s)(Home);
