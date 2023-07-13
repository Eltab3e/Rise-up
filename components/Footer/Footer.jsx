import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; 2023 Rise Up. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src={'/1.png'}
          alt='facebook'
          width={24}
          height={24}
          className={styles.icon}
        />
        <Image
          src={'/2.png'}
          alt='instagram'
          width={24}
          height={24}
          className={styles.icon}
        />
        <Image
          src={'/3.png'}
          alt='twitter'
          width={24}
          height={24}
          className={styles.icon}
        />
        <Image
          src={'/4.png'}
          alt='youtube'
          width={24}
          height={24}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
