import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react'
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './FormField.scss';

class FormField extends React.Component {
  render() {
    const { onChange } = this.props;
    const { placeholder } = this.props;
    let { size } = this.props;
    if (size === 'Small') {
      size = s.small_field;
    } else if (size === 'Medium') {
      size = s.medium_field;
    } else if (size === 'Large') {
      size = s.large_field;
    };

    return (
      <input
        className={cx(s.input_field, size)}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}

export default withStyles(s)(FormField);
