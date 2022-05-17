import styles from './AboutMe.module.scss';
import Image from 'next/image';
import EmailButton from './email-button/EmailButton';
import DescriptionButton from './description-button/DescriptionButton';
import { APP_URL } from '@/app/constants';

const AboutMe = ({ me }) => {
  return (
    <div className={styles.me}>
      <div className={styles['image-wrapper']}>
        <Image
          src={`https://avatars.githubusercontent.com/u/32432799?s=400&v=4`}
          alt={me.siteName}
          width={190}
          height={190}
          quality={100}
        />
      </div>
      <div className={styles.heading}>
        <span>maxcore25</span>
        <Image
          src={`https://redlinks.space/icons/verified.svg`}
          alt='Verified'
          width={16}
          height={16}
        />
      </div>
      <EmailButton />
      <DescriptionButton description={me.description} />
    </div>
  );
};

export default AboutMe;
