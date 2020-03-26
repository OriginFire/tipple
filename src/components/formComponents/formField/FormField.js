import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react'
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './FormField.scss';

class FormField extends React.Component {
  render() {
    const { placeholder } = this.props;
    const { size } = this.props;
    const { onChange } = this.props;

    return (
      <input className={cx(s.input_field, size)} placeholder={placeholder} onChange={onChange} />
    );
  }
}

export default withStyles(s)(FormField);
