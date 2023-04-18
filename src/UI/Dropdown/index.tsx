import React from 'react';
import styles from './Dropdown.module.sass';
import clsx from 'clsx';

const Dropdown: React.FC<{ title: string; options: string[] }> = ({ title, options }) => {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState<number[]>([]);

  function onCLickMinus(index: number) {
    if (!count[index]) return
    const newCount = count.slice();
    newCount[index] -= 1;
    setCount(newCount)
  }

  function onCLickPlus(index: number) {
    const newCount = count.slice();
    !newCount[index] && (newCount[index] = 0);
    newCount[index] += 1;
    setCount(newCount)
  }

  return (
    <div className={clsx(styles.dropdown, open && styles.dropdownOpen)}>
      <div className={styles.title} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <button className={styles.expand}>
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
                  onClick={() => onCLickMinus(i)}
                  disabled={count[i] < 1 || !count[i]}
                  className={styles.countButton}>
                  -
                </button>
                <h3>{count[i] || 0}</h3>
                <button onClick={() => onCLickPlus(i)} className={styles.countButton}>
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
