import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import FotosPage from './FotosPage';
import VideosPage from './VideosPage';

function HomepageHero() {
  const [paginaActual, setPaginaActual] = useState('home');

  if (paginaActual === 'fotos') {
    return <FotosPage onBack={() => setPaginaActual('home')} />;
  }

  if (paginaActual === 'videos') {
    return <VideosPage onBack={() => setPaginaActual('home')} />;
  }

  return (
    <>
      {/* SECCIÓN 1: Hero con video de fondo */}
      <section className={styles.hero}>
        <video className={styles.videoBg} autoPlay loop muted playsInline>
          <source src="/img/loop video.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>

        {/* Flecha dentro del hero (para posicionarse correctamente) */}
        <div className={styles.fletxa}>
          <img src="/img/fletxa.png" alt="scroll down" />
        </div>
      </section>

      {/* SECCIÓN 2: Nueva sección */}
      <section className={styles.menu}>
        <div className="menu">
          <div className={styles.inner}>
            {/* Botón para Fotos */}
              <img
                src={require("/img/polaroid foto.png").default}
                alt="polaroid foto"
                className={styles.polaroidfoto}
                onClick={() => setPaginaActual('fotos')}
              />
                             
              <video
                src={require("/img/video old.mp4").default}
                autoPlay
                muted
                loop
                playsInline
                onClick={() => setPaginaActual('videos')}
                className={styles.videoold}
        
              />
            
            
            <div className={styles.galeria}>
              {/* Galería content */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomepageHero;