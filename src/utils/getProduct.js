export const getProduct = (products ,{ brand, titleIncludes, category, tag }) => {
return products && products.filter((product) => {
    const matchBrand = brand && typeof(brand) === 'string'
    ? product.brand?.toLowerCase() === brand.toLowerCase() : true;
    const matchTitle = titleIncludes 
    ? product.title?.toLowerCase().includes(titleIncludes.toLowerCase())
    : true;
    const matchCategory = category && typeof(category) === 'string' 
    ? product.category?.toLowerCase() === category.toLowerCase()
    : true;
    const matchTag = tag
    ? product.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
    : true;

    return matchBrand && matchTitle && matchCategory && matchTag;
});
};