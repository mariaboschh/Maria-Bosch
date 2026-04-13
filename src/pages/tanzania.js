import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './gallery.module.css';

export default function Tanzania() {
  const images = [
    '/img/tanzaniafotos/tanzania1.jpg',
    '/img/tanzaniafotos/tanzania2.jpg',
    '/img/tanzaniafotos/tanzania3.jpg',
    '/img/tanzaniafotos/tanzania4.jpg',
    '/img/tanzaniafotos/tanzania5.jpg',
    '/img/tanzaniafotos/tanzania6.jpg',
    '/img/tanzaniafotos/tanzania7.jpg',
    '/img/tanzaniafotos/tanzania8.jpg',
    '/img/tanzaniafotos/tanzania9.jpg',
    '/img/tanzaniafotos/tanzania10.jpg',
    '/img/tanzaniafotos/tanzania11.jpg',
    '/img/tanzaniafotos/tanzania12.jpg',
    '/img/tanzaniafotos/tanzania13.jpg',
    '/img/tanzaniafotos/tanzania14.jpg',
    '/img/tanzaniafotos/tanzania15.jpg',
    '/img/tanzaniafotos/tanzania17.jpg',
    '/img/tanzaniafotos/tanzania16.jpg',
    '/img/tanzaniafotos/tanzania18.jpg',
    '/img/tanzaniafotos/tanzania19.jpg',
    '/img/tanzaniafotos/tanzania20.jpg',
  ];

  const [lightboxImg, setLightboxImg] = useState(null);

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
    <Layout title="Tanzania">
      <main style={{ padding: '40px' }}>

        {/* Galería */}
        <div className={styles.galleryfoto}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={styles.image}
              onClick={() => setLightboxImg(img)}
              alt={`Tanzania ${index + 1}`}
            />
          ))}
        </div>

        {/* Lightbox */}
        {lightboxImg && (
          <div
            className={styles.lightbox}
            onClick={() => setLightboxImg(null)}
          >
            <img
              src={lightboxImg}
              className={styles.lightboxImage}
              alt="Tanzania Enlarged"
            />
          </div>
        )}

      </main>
    </Layout>
  );
}