import React from 'react';
import styles from './ButtonGrid.module.css';

const ButtonGrid = ({ items }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Other Projects</h2>
      <div className={styles.buttonRow}>
        {items.map((item, index) => (
          <button
            key={index}
            className={styles.button}
            onClick={() => window.open(item.url, '_blank')}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGrid;
