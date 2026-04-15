import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './gallery.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Tanzania() {
  const images = [
    useBaseUrl('/img/tanzaniafotos/tanzania1.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania2.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania3.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania4.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania5.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania6.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania7.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania8.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania9.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania10.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania11.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania12.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania13.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania14.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania15.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania17.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania16.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania18.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania19.jpg'),
    useBaseUrl('/img/tanzaniafotos/tanzania20.jpg'),
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