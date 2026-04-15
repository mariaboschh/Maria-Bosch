import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './gallery.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Cultura() {

  const images = [
    useBaseUrl('/img/culturafotos/cultura1.jpg'),
    useBaseUrl('/img/culturafotos/cultura2.jpg'),
    useBaseUrl('/img/culturafotos/cultura3.jpg'),
    useBaseUrl('/img/culturafotos/cultura4.jpg'),
    useBaseUrl('/img/culturafotos/cultura5.jpg'),
    useBaseUrl('/img/culturafotos/cultura6.jpg'),
    useBaseUrl('/img/culturafotos/cultura7.jpg'),
    useBaseUrl('/img/culturafotos/cultura8.jpg'),
    useBaseUrl('/img/culturafotos/cultura9.jpg'),
    useBaseUrl('/img/culturafotos/cultura10.jpg'),
    useBaseUrl('/img/culturafotos/cultura11.jpg'),
    useBaseUrl('/img/culturafotos/cultura12.jpg'),
    useBaseUrl('/img/culturafotos/cultura13.jpg'),
    useBaseUrl('/img/culturafotos/cultura14.jpg'),
    useBaseUrl('/img/culturafotos/cultura15.jpg'),
    useBaseUrl('/img/culturafotos/cultura16.jpg'),
    useBaseUrl('/img/culturafotos/cultura17.jpg'),
    useBaseUrl('/img/culturafotos/cultura18.jpg'),
    useBaseUrl('/img/culturafotos/cultura19.jpg'),
    useBaseUrl('/img/culturafotos/cultura20.jpg'),
    useBaseUrl('/img/culturafotos/cultura21.jpg'),
    useBaseUrl('/img/culturafotos/cultura22.jpg'),
    useBaseUrl('/img/culturafotos/cultura23.jpg'),
    useBaseUrl('/img/culturafotos/cultura24.jpg'),
    useBaseUrl('/img/culturafotos/cultura25.jpg'),
    useBaseUrl('/img/culturafotos/cultura26.jpg'),
    useBaseUrl('/img/culturafotos/cultura27.jpg'),
    useBaseUrl('/img/culturafotos/cultura28.jpg'),
    useBaseUrl('/img/culturafotos/cultura29.jpg'),
    useBaseUrl('/img/culturafotos/cultura30.jpg'),
    useBaseUrl('/img/culturafotos/cultura31.jpg'),
    useBaseUrl('/img/culturafotos/cultura32.jpg'),
    useBaseUrl('/img/culturafotos/cultura33.jpg'),
    useBaseUrl('/img/culturafotos/cultura34.jpg'),
    useBaseUrl('/img/culturafotos/cultura35.jpg'),
    useBaseUrl('/img/culturafotos/cultura36.jpg'),
    useBaseUrl('/img/culturafotos/cultura37.jpg'),
    useBaseUrl('/img/culturafotos/cultura38.jpg'),
    useBaseUrl('/img/culturafotos/cultura39.jpg'),
    useBaseUrl('/img/culturafotos/cultura40.jpg'),
    useBaseUrl('/img/culturafotos/cultura41.jpg'),
    useBaseUrl('/img/culturafotos/cultura42.jpg'),
    useBaseUrl('/img/culturafotos/cultura43.jpg'),
    useBaseUrl('/img/culturafotos/cultura44.jpg'),
    useBaseUrl('/img/culturafotos/cultura45.jpg'),
    useBaseUrl('/img/culturafotos/cultura46.jpg'),
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