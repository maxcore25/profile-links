import styles from './EmailButton.module.scss';
import Image from 'next/image';
import { APP_URL } from '@/app/constants';

const EmailButton = () => {
  return (
    <div className={styles.button}>
      <a
        href='mailto:maxcore2500@gmail.com'
        target='_blank'
        rel='noreferrer'
        title='maxcore2500@gmail.com'>
        <span>
          <Image
            src={`${APP_URL}/icons/email.svg`}
            alt='Email Icon'
            width={18}
            height={18}
          />
        </span>
      </a>
    </div>
  );
};

export default EmailButton;
