import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './ContentBox.scss';

function ContentBox(props) {
  return (
    <div className={s.content}>
      <div className={s.box}>
        {props.children}
      </div>
    </div>
  )
}

export default withStyles(s)(ContentBox);
