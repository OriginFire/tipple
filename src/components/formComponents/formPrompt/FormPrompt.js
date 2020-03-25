import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import s from './FormPrompt.scss';

class FormPrompt extends React.Component {
  render() {
    const { prompt } = this.props;

    return <div className={s.prompt}>{prompt}</div>;
  }
}

export default withStyles(s)(FormPrompt);
