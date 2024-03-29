import withStyles from "isomorphic-style-loader/withStyles";
import React from 'react';
import s from './Splash.scss';

class Splash extends React.Component {
  render() {
    const first_line = this.props.first_line;
    const second_line = this.props.second_line;
    const image = this.props.image;

    return (
      <div className={s.splash_box}>
        <img className={s.homepage_image} src={image} />
      </div>
    );
  }
}

export default withStyles(s)(Splash);
