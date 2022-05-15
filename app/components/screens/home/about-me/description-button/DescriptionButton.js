import useOutside from '@/hooks/useOutside';
import styles from './DescriptionButton.module.scss';

const DescriptionButton = () => {
  const { ref, isShown, setIsShown } = useOutside();

  return (
    <div className={styles.parent} ref={ref}>
      <button onClick={() => setIsShown(!isShown)} className={styles.btn}>
        <span>About me</span>
      </button>
    </div>
  );
};

export default DescriptionButton;
