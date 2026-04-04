import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './gallery.module.css'; // tu CSS de galería y lightbox

export default function Cultura() {
  const images = [
    '/img/kyrgyfotos/GC2A1775.jpg',
    '/img/kyrgyfotos/GC2A1760.jpg',
    '/img/kyrgyfotos/GC2A1322.jpg',
    '/img/kyrgyfotos/GC2A1331.jpg',
    '/img/kyrgyfotos/GC2A2065.jpg',
    '/img/kyrgyfotos/GC2A1667.jpg',
    '/img/kyrgyfotos/GC2A1611.jpg',
    '/img/kyrgyfotos/GC2A1907.jpg',
    '/img/kyrgyfotos/GC2A0944.jpg',
    '/img/kyrgyfotos/GC2A1044.jpg',
    '/img/kyrgyfotos/GC2A0914.jpg',
    '/img/kyrgyfotos/GC2A0900.jpg',
    '/img/kyrgyfotos/GC2A0890.jpg',
    '/img/kyrgyfotos/GC2A0950.jpg',
    '/img/kyrgyfotos/GC2A0880.jpg',
    '/img/kyrgyfotos/GC2A0921.jpg',
    '/img/kyrgyfotos/GC2A0840.jpg',
    '/img/kyrgyfotos/GC2A0835.jpg',
    '/img/kyrgyfotos/GC2A0834.jpg',
    '/img/kyrgyfotos/GC2A0861.jpg',
    '/img/kyrgyfotos/GC2A0769.jpg',
    '/img/kyrgyfotos/_C2A0734.jpg',
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
    <Layout title="Cultura">
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