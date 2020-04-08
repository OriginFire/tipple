import withStyles from 'isomorphic-style-loader/withStyles';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Button.scss';

class Button extends React.Component {
  render() {
    let { type } = this.props;
    if (type === 'Primary') {
      type = s.primary_button;
    } else if (type === 'Secondary') {
      type = s.secondary_button;
    }

    return <button className={cx(s.button, type)} onClick={this.props.onClick}>{this.props.text}</button>;
  }
}

export default withStyles(s)(Button);
