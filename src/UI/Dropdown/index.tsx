import React from 'react';
import styles from './Dropdown.module.sass';

const Dropdown: React.FC<{ title: string; options: string[] }> = ({ title, options }) => {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);

  return (
    <div className={styles.dropdown}>
      <div className={styles.title}>
        <span>{title}</span>
        <button onClick={() => setOpen(!open)} className={styles.expand}>
          expand_more
        </button>
      </div>
      {open && (
        <div className={styles.options}>
          {options.map((optionName, i) => (
            <div key={i} className={styles.optionWrapper}>
              <h3 className={styles.option}>{optionName}</h3>
              <div className={styles.countWrapper}>
                <button
                  onClick={() => setCount(count - 1)}
                  disabled={count < 1}
                  className={styles.countButton}>
                  -
                </button>
                <h3>{count}</h3>
                <button onClick={() => setCount(count + 1)} className={styles.countButton}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
