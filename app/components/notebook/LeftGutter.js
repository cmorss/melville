import React from 'react';
import styles from './LeftGutter.css';

class LeftGutter extends React.Component {
  render() {
    return (
      <div className={styles.container} data-tid="container" />
    );
  }
}

export default LeftGutter;
