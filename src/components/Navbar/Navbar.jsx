import styles from './Navbar.module.css'

const Navbar = ({ onNavItemClick }) => {
    return (
        <nav className={styles.navbar}>
          <div className={styles.navbarbrand}>Funda Flashcards</div>
          <ul className={styles.navbarnav}>
            <li className={styles.navitem} onClick={() => onNavItemClick('new')}>New + </li>
            <li className={styles.navitem} onClick={() => onNavItemClick('list')}>List</li>
            <li className={styles.navitem} onClick={() => onNavItemClick('both')}>Both</li>
          </ul>
        </nav>
      );
}

export default Navbar