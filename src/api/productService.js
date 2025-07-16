export async function getAllProducts() {
    try{
    const res = await fetch(`https://dummyjson.com/products?limit=0`) ;
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json() ;
    return data.products ;
    }
    catch(error) {
        console.error(error) ;
        return [] ;
    }
}