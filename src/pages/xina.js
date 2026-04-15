import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './gallery.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Xina() {
  const images = [
    useBaseUrl('/img/xinafotos/fotosxina1.png'),
    useBaseUrl('/img/xinafotos/fotosxina12.png'),
    useBaseUrl('/img/xinafotos/fotosxina36.png'),
    useBaseUrl('/img/xinafotos/fotosxina37.png'),
    useBaseUrl('/img/xinafotos/fotosxina38.png'),
    useBaseUrl('/img/xinafotos/fotosxina39.png'),
    useBaseUrl('/img/xinafotos/fotosxina4.png'),
    useBaseUrl('/img/xinafotos/fotosxina5.png'),
    useBaseUrl('/img/xinafotos/fotosxina2.png'),
    useBaseUrl('/img/xinafotos/fotosxina6.png'),
    useBaseUrl('/img/xinafotos/fotosxina7.png'),
    useBaseUrl('/img/xinafotos/fotosxina8.png'),
    useBaseUrl('/img/xinafotos/fotosxina9.png'),
    useBaseUrl('/img/xinafotos/fotosxina10.png'),
    useBaseUrl('/img/xinafotos/fotosxina11.png'),
    useBaseUrl('/img/xinafotos/fotosxina15.png'),
    useBaseUrl('/img/xinafotos/fotosxina16.png'),
    useBaseUrl('/img/xinafotos/fotosxina17.png'),
    useBaseUrl('/img/xinafotos/fotosxina19.png'),
    useBaseUrl('/img/xinafotos/fotosxina20.png'),
    useBaseUrl('/img/xinafotos/fotosxina21.png'),
    useBaseUrl('/img/xinafotos/fotosxina22.png'),
    useBaseUrl('/img/xinafotos/fotosxina23.png'),
    useBaseUrl('/img/xinafotos/fotosxina24.png'),
    useBaseUrl('/img/xinafotos/fotosxina25.png'),
    useBaseUrl('/img/xinafotos/fotosxina28.png'),
    useBaseUrl('/img/xinafotos/fotosxina31.png'),
    useBaseUrl('/img/xinafotos/fotosxina33.png'),
    useBaseUrl('/img/xinafotos/fotosxina40.png'),
    useBaseUrl('/img/xinafotos/fotosxina42.png'),
    useBaseUrl('/img/xinafotos/fotosxina43.png'),
    useBaseUrl('/img/xinafotos/fotosxina44.png'),
    useBaseUrl('/img/xinafotos/fotosxina45.png'),
    useBaseUrl('/img/xinafotos/fotosxina47.png'),
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
    <Layout title="Xina">
      <main style={{ padding: '40px' }}>

        {/* Galería */}
        <div className={styles.galleryfoto}>
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
            <img
              src={lightboxImg}
              className={styles.lightboxImage}
              alt="Xina Enlarged"
            />
          </div>
        )}

      </main>
    </Layout>
  );
}