import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './gallery.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Madagascar() {
  const images = [
    useBaseUrl('/img/madagascarfotos/madagascar1.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar2.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar3.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar4.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar5.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar6.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar7.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar8.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar9.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar10.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar11.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar12.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar13.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar14.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar15.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar16.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar17.jpg'),
    useBaseUrl('/img/madagascarfotos/madagascar18.jpg'),
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