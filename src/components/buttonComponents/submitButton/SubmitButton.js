import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import PropTypes from 'prop-types';
import s from './SubmitButton.scss';

class SubmitButton extends React.Component {
  render() {
    return (
      <button className={s.submit_button}>Submit</button>
    )
  }
}

export default withStyles(s)(SubmitButton);
