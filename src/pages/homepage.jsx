import styles from '../styles/homepage.module.css' ;

const HomePage = ( ) => {

    return (
        <>
            <nav>
                <div className="companyName"></div>
                <div className="searchBar">
                    <input type="text" placeholder='Search...' />
                    <span>search Icon</span>
                </div>
                <div className="icons">
                    <span></span><span></span><span></span>
                </div>
            </nav>
        </>
    )
}

export default HomePage;