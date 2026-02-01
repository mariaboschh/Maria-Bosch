import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageHero() {
  return (
    <section className={styles.hero}>
      <div className={clsx('container', styles.inner)}>
        <h1 className={styles.title}>Maria Bosch</h1>
        <img
          src={require('@site/static/img/exemple.JPG').default}
          alt="Maria Bosch"
          className={styles.photo}
        />
      </div>
    </section>
  );
}
