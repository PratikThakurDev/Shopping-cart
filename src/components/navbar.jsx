import styles from '../styles/navBar.module.css';
import {useState,useEffect} from 'react' ;
import ShoppingSection from '../pages/shoppage';
const NavBar = ( ) => {

    const [productSearched , setProductSearched] = useState([]) ;

    const handleSubmit = (e) => {
        e.preventDefault() ;
        if(!productSearched.trim()) return null ;
        <ShoppingSection productQuery = {productSearched} />
        
    }

    return(
        <>
            <nav className={styles.navbar}>
            <div className={styles.companyName}>DigiTech</div>
            <form className={styles.searchBar} onSubmit={handleSubmit}>
                <input className={styles.input} type="text" placeholder="Search..."  onChange = {(e) => setProductSearched(e.target.value)}/>
                <button type = 'submit'>🔍</button>
            </form>
            <div className={styles.icons}>
                <span>👤</span>
                <span>🛒</span>
            </div>
            </nav>
        </>
    )
    
}

export default NavBar ;