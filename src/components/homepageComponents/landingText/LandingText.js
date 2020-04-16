import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './LandingText.scss';

class LandingText extends React.Component {
  render() {
    return (
      <div className={s.explainer}>
        <h2 className={s.explainer_text}>
          Mixology in a bottle. By local bars.
        </h2>
      </div>
    );
  }
}

export default withStyles(s)(LandingText);
