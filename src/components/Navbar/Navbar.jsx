import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
          <div className={styles.navbarbrand}>Funda Flashcards</div>
          <ul className={styles.navbarnav}>
            <li className={styles.navitem}>New + </li>
            <li className={styles.navitem}>List</li>
            <li className={styles.navitem}>Both</li>
          </ul>
        </nav>
      );
}

export default Navbar