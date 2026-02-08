import React from 'react';
import styles from './VideosPage.module.css'; // Importa SU CSS

function VideosPage({ onBack }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>🎥 Galería de Videos</h1>
      <p>Esta es la página de videos que puedes personalizar</p>
      <button onClick={onBack} className={styles.backButton}>
        ← Volver al inicio
      </button>
    </div>
  );
}

export default VideosPage;