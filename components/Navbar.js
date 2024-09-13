// // components/Navbar.js
// import styles from '../styles/Navbar.module.css';

// export default function Navbar() {
//   return (
//     <nav className={styles.navbar}>
//       <img src="/Logo.png" alt="Logo" className={styles.logo} />
//       <div className={styles.links}>
//         <a href="https://girmantech.com" target="_blank" rel="noopener noreferrer">Website</a>
//         <a href="https://www.linkedin.com/company/girman-technologies" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//         <a href="mailto:contact@girmantech.com">Contact</a>
//       </div>
//     </nav>
//   );
// }


// components/Navbar.js

import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src="/Logo.png" alt="Logo" className={styles.logo} />
      <div className={styles.links}>
        <a href="/" className={styles.navLink}>Search</a>
        <a href="https://girmantech.com" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Website</a>
        <a href="https://www.linkedin.com/company/girman-technologies" target="_blank" rel="noopener noreferrer" className={styles.navLink}>LinkedIn</a>
        <a href="mailto:contact@girmantech.com" className={styles.navLink}>Contact</a>
      </div>
    </nav>
  );
}
