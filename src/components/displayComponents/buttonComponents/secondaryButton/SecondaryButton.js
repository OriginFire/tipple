import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './SecondaryButton.scss';

class SecondaryButton extends React.Component {
  render() {
    return <button className={s.secondary_button}>{this.props.text}</button>;
  }
}

export default withStyles(s)(SecondaryButton);
