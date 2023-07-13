'use client';

import Link from 'next/link';
import links from '@/constants';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={'/'} className={styles.logo}>
        Rise Up
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button
          onClick={() => {
            console.log('logged out');
          }}
          className={styles.logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
