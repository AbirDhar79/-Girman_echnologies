// import { useState } from 'react';
// import DialogBox from './DialogBox';
// import styles from '../styles/UserCard.module.css';


// export default function UserCard({ user }) {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const handleFetchDetails = () => {
//     setIsDialogOpen(true);
//   };
  
//   return (
//     <div className={styles.card}>
//       <img src="/placeholder.jpg" alt="User" className={styles.image} />
//       <h2>{user.first_name} {user.last_name}</h2>
//       <p>{user.city}</p>
//       <p>{user.contact_number}</p>
//       <button onClick={handleFetchDetails} className={styles.button}>Fetch Details</button>
//       {isDialogOpen && <DialogBox user={user} onClose={() => setIsDialogOpen(false)} />}
//     </div>
//   );
// }

// import { useState } from 'react';
// import DialogBox from './DialogBox';
// import styles from '../styles/UserCard.module.css';

// export default function UserCard({ user }) {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const handleFetchDetails = () => {
//     setIsDialogOpen(true);
//   };

//   return (
//     <div className={styles.card}>
//       <img src="./placeholder.jpg" alt="User" className={styles.image} />
//       <h2>{user.first_name} {user.last_name}</h2>
//       <p>{user.city}</p>
//       <p><span className={styles.phoneIcon}>📞</span> {user.contact_number}</p>
//       <button onClick={handleFetchDetails} className={styles.button}>Fetch Details</button>
//       {isDialogOpen && <DialogBox user={user} onClose={() => setIsDialogOpen(false)} />}
//     </div>
//   );
// }


import { useState } from 'react';
import DialogBox from './DialogBox';
import styles from '../styles/UserCard.module.css';

export default function UserCard({ user }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFetchDetails = () => {
    setIsDialogOpen(true);
  };

  return (
    <div className={styles.card}>
      <img src="/placeholder.jpg" alt="User" className={styles.image} />
      <h2>{user.first_name} {user.last_name}</h2>
      <p>{user.city}</p>
      <p><span className={styles.phoneIcon}>📞</span> {user.contact_number}</p>
      <button onClick={handleFetchDetails} className={styles.button}>Fetch Details</button>
      {isDialogOpen && <DialogBox user={user} onClose={() => setIsDialogOpen(false)} />}
    </div>
  );
}
