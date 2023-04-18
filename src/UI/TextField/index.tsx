import React from 'react';
import styles from './TextField.module.sass';

const TextField: React.FC<{ placeholderText?: string }> = ({ placeholderText }) => {
  return <input className={styles.root} placeholder={placeholderText} type="text" />;
};

export default TextField;
