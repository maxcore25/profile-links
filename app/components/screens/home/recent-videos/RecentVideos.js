import axios from 'axios';
import { useQuery } from 'react-query';
import styles from './RecentVideos.module.scss';
import VideoItem from './VideoItem';

const RecentVideos = () => {
  const { data, isLoading } = useQuery(
    'get recent videos',
    () => axios.get('/api/youtube'),
    {
      select: ({ data }) => data,
    }
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>New Videos:</div>
      {isLoading
        ? 'Loading...'
        : data?.length
        ? data.map(video => <VideoItem key={video._id} item={video} />)
        : 'No Videos'}
    </div>
  );
};

export default RecentVideos;
