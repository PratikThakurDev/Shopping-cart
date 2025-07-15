import styles from '../styles/navBar.module.css';

const NavBar = ( ) => {
    return(
        <>
            <nav className={styles.navbar}>
            <div className={styles.companyName}>DigiTech</div>
            <div className={styles.searchBar}>
                <input className={styles.input} type="text" placeholder="Search..." />
                <span>🔍</span>
            </div>
            <div className={styles.icons}>
                <span>👤</span>
                <span>❤️</span>
                <span>🛒</span>
            </div>
            </nav>
        </>
    )
    
}

export default NavBar ;