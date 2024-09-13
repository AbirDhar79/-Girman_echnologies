import Image from 'next/image';
import Navbar from './Navbar';
import SearchForm from './SearchForm';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.logoContainer}>
          <img src="./coloured v1 white.png" alt="Company Logo" className={styles.logo} />
          <SearchForm />
        </div>
      <div className={styles.main}>
      <Image src="/bg_image.png" alt="Background" width={1920} height={1080} className={styles.backgroundImage} />
        
        
      </div>
    </div>
  );
}