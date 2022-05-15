import styles from './Home.module.scss';
import MetaTitle from '../../ui/MetaTitle';
import AboutMe from '../home/about-me/AboutMe';
import RecentVideos from '../home/recent-videos/RecentVideos';
import Grid from '../home/grid/Grid';
import Circles from '@/ui/circles/Circles';

const Home = ({ links, me }) => {
  return (
    <section className={styles.section}>
      <MetaTitle />
      <div className={styles.container}>
        <AboutMe me={me} />
        <RecentVideos />
        <Grid links={links} />
      </div>
      <Circles />
    </section>
  );
};

export default Home;
