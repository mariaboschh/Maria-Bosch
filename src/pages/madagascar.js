import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './gallery.module.css';

export default function Madagascar() {
  const images = [
    '/img/madagascarfotos/madagascar1.jpg',
    '/img/madagascarfotos/madagascar2.jpg',
    '/img/madagascarfotos/madagascar3.jpg',
    '/img/madagascarfotos/madagascar4.jpg',
    '/img/madagascarfotos/madagascar5.jpg',
    '/img/madagascarfotos/madagascar6.jpg',
    '/img/madagascarfotos/madagascar7.jpg',
    '/img/madagascarfotos/madagascar8.jpg',
    '/img/madagascarfotos/madagascar9.jpg',
    '/img/madagascarfotos/madagascar10.jpg',
    '/img/madagascarfotos/madagascar11.jpg',
    '/img/madagascarfotos/madagascar12.jpg',
    '/img/madagascarfotos/madagascar13.jpg',
    '/img/madagascarfotos/madagascar14.jpg',
    '/img/madagascarfotos/madagascar15.jpg',
    '/img/madagascarfotos/madagascar16.jpg',
    '/img/madagascarfotos/madagascar17.jpg',
    '/img/madagascarfotos/madagascar18.jpg',
    '/img/madagascarfotos/madagascar19.jpg',
    '/img/madagascarfotos/madagascar20.jpg',
    '/img/madagascarfotos/madagascar21.jpg',
    '/img/madagascarfotos/madagascar22.jpg',
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
    <Layout title="Madagascar">
      <main style={{ padding: '40px' }}>

        {/* Galería */}
        <div className={styles.galleryfoto}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={styles.image}
              onClick={() => setLightboxImg(img)}
              alt={`Madagascar ${index + 1}`}
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
              alt="Madagascar Enlarged"
            />
          </div>
        )}

      </main>
    </Layout>
  );
}