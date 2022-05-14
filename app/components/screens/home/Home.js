import styles from './Home.module.scss';
import MetaTitle from '../../ui/MetaTitle';

const Home = ({ links, me }) => {
  return (
    <section className={styles.section}>
      <MetaTitle />
      <div className={styles.container}></div>
    </section>
  );
};

export default Home;
