import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function Foto() {
  return (
    <Layout title="Foto">
      <div className={styles.page}>

        <div className={styles.containerSD}>

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

                    {/* TANZANIA */}
          <Link to="/tanzania">
            <img
              src={require('/img/sd tanzania.png').default}
              alt="SD Tanzania"
              className={styles.sdtanzania}
            />
          </Link>

          
          {/* MADAGASCAR */}
          <Link to="/madagascar">
            <img
              src={require('/img/sd madagascar.png').default}
              alt="SD Madagascar"
              className={styles.sdmadagascar}
            />
          </Link>


          {/* CULTURA */}
          <Link to="/cultura">
            <img
              src={require('/img/sd cultura.png').default}
              alt="SD Cultura"
              className={styles.sdcultura}
            />
          </Link>


        </div>

      </div>
    </Layout>
  );
}