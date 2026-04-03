import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './gallery.module.css'; // tu CSS de galería y lightbox

export default function Xina() {
  const images = [
    '/img/xinafotos/fotosxina1.png',
    '/img/xinafotos/fotosxina12.png',
    '/img/xinafotos/fotosxina36.png',
    '/img/xinafotos/fotosxina37.png',
    '/img/xinafotos/fotosxina38.png',
    '/img/xinafotos/fotosxina39.png',
    '/img/xinafotos/fotosxina4.png',
    '/img/xinafotos/fotosxina5.png',
    '/img/xinafotos/fotosxina2.png',
    '/img/xinafotos/fotosxina6.png',
    '/img/xinafotos/fotosxina7.png',
    '/img/xinafotos/fotosxina8.png',
    '/img/xinafotos/fotosxina9.png',
    '/img/xinafotos/fotosxina10.png',
    '/img/xinafotos/fotosxina11.png',
    '/img/xinafotos/fotosxina15.png',
    '/img/xinafotos/fotosxina16.png',
    '/img/xinafotos/fotosxina17.png',
    '/img/xinafotos/fotosxina19.png',
    '/img/xinafotos/fotosxina20.png',
    '/img/xinafotos/fotosxina21.png',
    '/img/xinafotos/fotosxina22.png',
    '/img/xinafotos/fotosxina23.png',
    '/img/xinafotos/fotosxina24.png',
    '/img/xinafotos/fotosxina25.png',
    '/img/xinafotos/fotosxina28.png',
    '/img/xinafotos/fotosxina31.png',
    '/img/xinafotos/fotosxina33.png',
    '/img/xinafotos/fotosxina40.png',
    '/img/xinafotos/fotosxina42.png',
    '/img/xinafotos/fotosxina43.png',
    '/img/xinafotos/fotosxina44.png',
    '/img/xinafotos/fotosxina45.png',
    '/img/xinafotos/fotosxina47.png',
  ];

  const [lightboxImg, setLightboxImg] = useState(null);

  // efecto seguro para SSR: añade clase al body solo si existe document
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (lightboxImg) {
        document.body.classList.add('lightbox-active');
      } else {
        document.body.classList.remove('lightbox-active');
      }
    }
  }, [lightboxImg]);

  return (
    <Layout title="Xina">
      <main style={{ padding: '40px' }}>
        {/* Galería */}
        <div className={styles.galleryxina}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={styles.image}
              onClick={() => setLightboxImg(img)}
              alt={`Xina ${index + 1}`}
            />
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImg && (
          <div
            className={styles.lightbox}
            onClick={() => setLightboxImg(null)}
          >
            <img src={lightboxImg} className={styles.lightboxImage} alt="Xina Enlarged" />
          </div>
        )}
      </main>
    </Layout>
  );
}