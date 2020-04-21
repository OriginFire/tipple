import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './FormField.scss';

class FormField extends React.Component {
  render() {
    const { onChange } = this.props;
    const { placeholder } = this.props;
    const { type } = this.props;
    const { value } = this.props;
    const { id } = this.props;
    const { pattern } = this.props;
    const { icon } = this.props;
    const { maxlength } = this.props;
    let { size } = this.props;
    if (size === 'Small') {
      size = s.small_field;
    } else if (size === 'Medium') {
      size = s.medium_field;
    } else if (size === 'Large') {
      size = s.large_field;
    };

    return (
      <div className={s.field} >
        <input
          className={cx(s.input_field, size)}
          onChange={onChange}
          type={type}
          value={value}
          required
          pattern={pattern}
          maxLength={maxlength}
        />
        <span className={s.placeholder}>{placeholder}</span>
      </div>
    );
  }
}

export default withStyles(s)(FormField);
