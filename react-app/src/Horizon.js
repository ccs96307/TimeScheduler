// src/Horizon.js
import React, { useEffect } from 'react';
import styles from './Horizon.module.css';

function Horizon() {
  useEffect(() => {
    document.title = 'Horizon - TimeScheduler';
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={`${styles.block} ${styles.today}`}>Today</div>
        <div className={styles.block}>Week</div>
        <div className={styles.block}>Month</div>
        <div className={styles.block}>Year</div>
        <div className={styles.block}>Life</div>
      </div>
    </div>
  );
}

export default Horizon;
