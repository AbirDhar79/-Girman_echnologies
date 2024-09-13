// components/SearchForm.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/SearchForm.module.css';

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <div className={styles.searchContainer}>
        <span className={styles.searchIcon}></span>        
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>
    </form>
  );
}

