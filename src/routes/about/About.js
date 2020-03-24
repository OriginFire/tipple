import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import s from './About.scss';

class Finder extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>This will be the finder content</h1>
          <p>...</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Finder);
