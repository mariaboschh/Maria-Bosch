import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import YTlogo from '/img/YTlogo.png'; // el teu logo

export default function Video() {
  return (
    <Layout title="Video">
      <div
        style={{
          padding: '60px 40px',
          minHeight: '100vh',
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {/* Text sobre el logo */}
        <p className={styles.youtubeText}>Visita el meu canal de YouTube:</p>

        {/* Logo de YouTube com a enllaç */}
        <a
          href="https://www.youtube.com/@mariaboschh"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.youtubeLogoLink}
        >
          <img src={YTlogo} alt="Visita mi canal de YouTube" className={styles.youtubeLogo} />
        </a>

        {/* Video 1 */}
        <div className={styles.videoxina}>
          <iframe
            src="https://www.youtube.com/embed/BHg_9DIwDSM"
            title="Video Xina"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className={styles.videokyrgy}>
          <iframe
            src="https://www.youtube.com/embed/FFLvonjJNh4?start=9"
            title="Video Kyrgy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 3 */}
        <div className={styles.videouganda}>
          <iframe
            src="https://www.youtube.com/embed/gAfgeZhy30E"
            title="Video Uganda"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 4 */}
        <div className={styles.videojordania}>
          <iframe
            src="https://www.youtube.com/embed/HxBGpsEq5yU"
            title="Video Jordania"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 5 */}
        <div className={styles.videoberlin}>
          <iframe
            src="https://www.youtube.com/embed/Y61Hpst82_Q"
            title="Video Berlín"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </Layout>
  );
}