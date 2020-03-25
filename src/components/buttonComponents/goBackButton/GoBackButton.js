import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './GoBackButton.scss';

class GoBackButton extends React.Component {
  render() {
    return (
      <button className={s.go_back_button}>Go Back</button>
    )
  }
}

export default withStyles(s)(GoBackButton);
