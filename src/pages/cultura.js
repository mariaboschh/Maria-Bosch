import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './gallery.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Cultura() {
  const images = [
    useBaseUrl('/img/kyrgyfotos/GC2A1775.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A1760.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A1322.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A1331.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A2065.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A1667.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A1611.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A1907.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A0944.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A1044.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A0914.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A0900.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A0890.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A0950.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A0880.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A0921.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A0840.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A0835.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A0834.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A0861.jpg'),
    useBaseUrl('/img/kyrgyfotos/GC2A0769.jpg'),
    useBaseUrl('/img/kyrgyfotos/_C2A0734.jpg'),
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
    <Layout title="Cultura">
      <main style={{ padding: '40px' }}>

        {/* Galería */}
        <div className={styles.galleryfoto}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={styles.image}
              onClick={() => setLightboxImg(img)}
              alt={`Cultura ${index + 1}`}
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
              alt="Cultura Enlarged"
            />
          </div>
        )}

      </main>
    </Layout>
  );
}