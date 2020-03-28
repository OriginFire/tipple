import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './PrimaryButton.scss';

class PrimaryButton extends React.Component {
  render() {
    return <button className={s.submit_button} onClick={this.props.onClick}>{this.props.text}</button>;
  }
}

export default withStyles(s)(PrimaryButton);
