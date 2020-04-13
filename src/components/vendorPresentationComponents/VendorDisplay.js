import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './VendorDisplay.scss';
import Button from '../displayComponents/buttonComponents/Button/Button';
import Link from '../utilityComponents/link/Link';

class VendorDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={s.search_result_content}>
        <div className={s.search_result_list_display}>
          {this.props.id}
          <div className={s.buttons}>
            <Link to="/">
              <Button type="Secondary" text="Return Home" />
            </Link>

            <Link to="/partner">
              <Button type="Primary" text="Add A Bar" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(VendorDisplay);
