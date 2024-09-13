import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
       <Image src="/Logo.png" alt="Logo" width={150} height={50} className={styles.logo} />
      <div className={styles.links}>
      <Link href="/" className={styles.navLink}>
  Search
</Link>

      <a href="https://girmantech.com" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Website</a>
<a href="https://www.linkedin.com/company/girman-technologies" target="_blank" rel="noopener noreferrer" className={styles.navLink}>LinkedIn</a>
<a href="mailto:contact@girmantech.com" className={styles.navLink}>Contact</a>


      </div>
    </nav>
  );
}
