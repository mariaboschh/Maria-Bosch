import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Foto() {
  return (
    <Layout title="Foto">
      <div
        style={{
          padding: '60px 40px',
          minHeight: '100vh',
          background: '#ffffff',
        }}
      >
        {/* KYRGY */}
        <Link to="/kyrgy">
          <img
            src={require('/img/sd kyrgy.png').default}
            alt="SD Kyrgy"
            className={styles.sdkyrgy}
          />
        </Link>

        {/* XINA */}
        <Link to="/xina">
        <img
          src={require('/img/sd xina.png').default}
          alt="SD Xina"
          className={styles.sdxina}
        />
          </Link>

        {/* CULTURA */}
        <img
          src={require('/img/sd cultura.png').default}
          alt="SD Cultura"
          className={styles.sdcultura}
        />
      </div>
    </Layout>
  );
}