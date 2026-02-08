import React from 'react';
import styles from './FotosPage.module.css'; // Importa SU CSS

function FotosPage({ onBack }) {
  return (
    <div style={{
      padding: '60px 40px',
      minHeight: '100vh',
      background: '#ffffff'
    }}>
      <img
        src={require("/img/sd kyrgy.png").default}
        alt="SD Kyrgy"
        className={styles.sdkyrgy}
      />
        <img
        src={require("/img/sd xina.png").default}
        alt="SD Xina"
        className={styles.sdxina}
      />
    </div>
  );
}

export default FotosPage;