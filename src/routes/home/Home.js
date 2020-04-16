import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './Home.scss';
import SplashComponent from "../../components/sitewideDisplayComponents/Splash/Splash";
import HomepageImage from '../../../public/LevitationAspect.JPG';
import HomepageContent from '../../components/homepageComponents/homepageContent/HomepageContent';

class Home extends React.Component {
  render() {
    return (
      <div className={s.landing_content}>
        <SplashComponent
          image={HomepageImage}
          first_line={"Mixology in a bottle."}
          second_line={"Crafted by local bars."}
        />
        <HomepageContent />
      </div>
    );
  }
}

export default withStyles(s)(Home);
