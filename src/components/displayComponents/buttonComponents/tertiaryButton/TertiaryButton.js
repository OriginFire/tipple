import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './TertiaryButton.scss';

class TertiaryButton extends React.Component {
  render() {
    return <button className={s.tertiary_button}>{this.props.text}</button>;
  }
}

export default withStyles(s)(TertiaryButton);
