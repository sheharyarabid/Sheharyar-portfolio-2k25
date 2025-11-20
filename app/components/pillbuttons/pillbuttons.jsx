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
      <a
        href="https://drive.google.com/file/d/1aAc9s9xWyOkNB4S14npOuDwfqkc4HjCK/view?usp=sharing" // replace with your local asset path
        download
        className={styles.button}
      >
        Download Resume
      </a>
      <a
        href="https://github.com/sheharyarabid" // replace with your local asset path
        download
        className={styles.button}
      >
        Github
      </a>

    </div>
  );
};

export default PillButtons;
