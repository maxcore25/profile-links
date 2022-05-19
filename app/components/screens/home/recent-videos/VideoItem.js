import styles from './RecentVideos.module.scss';

const VideoItem = ({ item }) => {
  console.log(item);
  return (
    <a
      href={`https://youtu.be/${item.videoId}`}
      target='_blank'
      rel='noreferrer'
      className={styles.item}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.thumbnail} alt={item.title} width={70} />
      <h4>{item.title}</h4>
    </a>
  );
};

export default VideoItem;
