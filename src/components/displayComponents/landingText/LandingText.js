import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './LandingText.scss';

class LandingText extends React.Component {
  render() {
    return (
      <div className={s.explainer}>
        <h2 className={s.explainer_text}>
          Tipple sends pre-made craft cocktails to you.
        </h2>
      </div>
    );
  }
}

export default withStyles(s)(LandingText);
