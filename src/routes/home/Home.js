import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './Home.scss';
import HomepageContent from '../../components/homepageContent/HomepageContent';

class Home extends React.Component {
  render() {
    return (
      <HomepageContent />
    );
  }
}

export default withStyles(s)(Home);
