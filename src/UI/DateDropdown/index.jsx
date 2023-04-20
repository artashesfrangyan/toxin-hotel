import React from 'react';
import styles from './DateDropdown.module.sass';

const DateDropdown = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dateDropdown}></div>
      <div className={styles.dateDropdown}></div>
    </div>
  );
};

export default DateDropdown;
