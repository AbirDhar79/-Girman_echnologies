import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import UserCard from '../components/UserCard';
import styles from '../styles/SearchResults.module.css';

export default function SearchResults({ initialUsers, initialError, initialQuery }) {
  const router = useRouter();
  const [users, setUsers] = useState(initialUsers);
  const [error, setError] = useState(initialError);
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    router.push(`/search?query=${newQuery}`, undefined, { shallow: true });

    try {
      const response = await axios.get(`/api/users?query=${newQuery}`);
      setUsers(response.data);
      setError('');
    } catch (error) {
      setUsers([]);
      setError(error.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search users..."
        className={styles.searchInput}
      />
      {error ? (
        <div className={styles.error}>
          <Image
            src="/empty_search.png"
            alt="No Results"
            width={200}
            height={200}
            className={styles.noResultsImage}
          />
          <p>No results found.</p>
        </div>
      ) : (
        <div className={styles.results}>
          {users.map(user => (
            <UserCard key={user._id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context.query;
  
  if (!query) {
    return { props: { initialUsers: [], initialError: '', initialQuery: '' } };
  }

  try {
    const response = await axios.get(`${process.env.API_URL}/api/users?query=${query}`);
    return {
      props: {
        initialUsers: response.data,
        initialError: '',
        initialQuery: query,
      },
    };
  } catch (error) {
    return {
      props: {
        initialUsers: [],
        initialError: error.response?.data?.error || 'An error occurred',
        initialQuery: query,
      },
    };
  }
}
