import { useState, useEffect } from 'react';
import styles from '../styles/DialogBox.module.css';
import Image from 'next/image';
export default function DialogBox({ user, onClose }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <h2>{user.first_name} {user.last_name}</h2>
        <div>
          <p>{user.city}</p>
          <p>{user.contact_number}</p>
          <Image src="/placeholder.jpg" alt="User" width={150} height={150} className={styles.image} />
        </div>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

