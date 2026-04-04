import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

function HomepageHero() {

  const scrollToBottom = () => {
    const offset = 150;

    const scrollTarget =
      document.body.scrollHeight - window.innerHeight - offset;

    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* SECCIÓN 1: Hero con video de fondo */}
      <section className={styles.hero}>
        <video className={styles.videoBg} autoPlay loop muted playsInline>
          <source src="/img/loop video.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>

        <div
          className={styles.fletxa}
          onClick={scrollToBottom}
          style={{ cursor: 'pointer' }}
        >
          <img src="/img/fletxa.png" alt="scroll down" />
        </div>
      </section>

      {/* SECCIÓN 2: Menú */}
      <section className={styles.menu}>
        <div className="menu">
          <div className={styles.inner}>

            {/* FOTO */}
            <Link to="/foto">
              <img
                src={require("/img/polaroid foto.png").default}
                alt="polaroid foto"
                className={styles.polaroidfoto}
              />
            </Link>

            {/* VIDEO */}
            <Link to="/video">
              <video
                src={require("/img/video old.mp4").default}
                autoPlay
                muted
                loop
                playsInline
                className={styles.videoold}
              />
            </Link>

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