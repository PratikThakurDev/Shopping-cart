import styles from '../styles/brandrow.module.css' ;

const BrandRow = () => {
    return (
        <div className={styles.brandRow}>
        {[{brand : 'Huawei' , logo : "https://logo.clearbit.com/huawei.com"},
            {brand : 'Nokia' , logo : "https://logo.clearbit.com/nokia.com"}, 
            {brand : 'Samsung' , logo : "https://logo.clearbit.com/samsung.com"}, 
            {brand : 'Canon' , logo : "https://logo.clearbit.com/canon.com"},
            {brand : 'Asus' , logo : "https://logo.clearbit.com/asus.com"}, 
            {brand : 'Apple' , logo : "https://logo.clearbit.com/apple.com"}].map(({brand , logo}, i) => (
            <img key={i} src= {logo} alt={brand} />
        ))}
        </div>
    )
}

export default BrandRow ;