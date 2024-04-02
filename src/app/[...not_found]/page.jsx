// pages/404.js

import Link from 'next/link';
import styles from '../page.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oops! Page Not Found</h1>
        <p className={styles.description}>
          The page you are looking for might have been removed,
          <br /> had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/auth/signin" className={styles.link}>
          Go back to sign in page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
