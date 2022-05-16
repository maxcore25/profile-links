import styles from './AboutMe.module.scss';
import Image from 'next/image';
import EmailButton from './email-button/EmailButton';
import DescriptionButton from './description-button/DescriptionButton';

const AboutMe = ({ me }) => {
  return (
    <div className={styles.me}>
      <div className={styles['image-wrapper']}>
        <Image
          src={`${APP_URL}${me.avatar}`}
          alt={me.siteName}
          width={190}
          height={190}
          quality={100}
        />
      </div>
      <div className={styles.heading}>
        <span>maxcore25</span>
        <Image
          src={`${APP_URL}/icons/verified.svg`}
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
