import { useOutside } from '@/hooks/useOutside';
import styles from './DescriptionButton.module.scss';
import cn from 'classnames';
import parse from 'html-react-parser';

const DescriptionButton = ({ description }) => {
  const { ref, isShown, setIsShown } = useOutside(false);

  return (
    <div className={styles.parent} ref={ref}>
      <button
        onClick={() => setIsShown(!isShown)}
        className={cn({ [styles.active]: isShown })}>
        <span>About me</span>
      </button>
      {isShown && <article>{parse(description)}</article>}
    </div>
  );
};

export default DescriptionButton;
