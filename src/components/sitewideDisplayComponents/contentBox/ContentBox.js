import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './ContentBox.scss';

function ContentBox(props) {
  return (
    <div className={s.search_result_content}>
      <div className={s.search_result_list_display}>
        {props.children}
      </div>
    </div>
  )
}

export default withStyles(s)(ContentBox);
