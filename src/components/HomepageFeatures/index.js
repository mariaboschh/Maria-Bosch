import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHero() {

  const scrollToBottom = () => {
    const menuSection = document.querySelector(`.${styles.menu}`);

    if (menuSection) {
      menuSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <video className={styles.videoBg} autoPlay loop muted playsInline>
          <source src={useBaseUrl('/img/loop video.mp4')} type="video/mp4" />
        </video>

        <div
          className={styles.fletxa}
          onClick={scrollToBottom}
          style={{ cursor: 'pointer' }}
        >
          <img src={useBaseUrl('/img/fletxa.png')} alt="scroll down" />
        </div>
      </section>

      {/* MENU */}
      <section className={styles.menu}>
        <div className="menu">
          <div className={styles.inner}>

            <Link to="/foto">
              <img
                src={useBaseUrl('/img/polaroid foto.png')}
                alt="polaroid foto"
                className={styles.polaroidfoto}
              />
            </Link>

            <Link to="/video">
              <video
                src={useBaseUrl('/img/video old.mp4')}
                autoPlay
                muted
                loop
                playsInline
                className={styles.videoold}
              />
            </Link>

          </div>
        </div>
      </section>
    </>
  );
}

export default HomepageHero;