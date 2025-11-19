import React from 'react';
import styles from './pillbuttons.module.css';

const PillButtons = () => {
  return (
    <div className={styles.buttonRow}>
      <a
        href="https://www.linkedin.com/in/sheharyarabid/" // replace with your LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        LinkedIn
      </a>
      {/* <a
        href="/assets/YourCV.pdf" // replace with your local asset path
        download
        className={styles.button}
      >
        Download Resume
      </a> */}
    </div>
  );
};

export default PillButtons;
