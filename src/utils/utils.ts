export const createProductsUrl = (type: string, subType?: string,) => {
    return encodeURI(`/products?type=${type}${subType ? '&subType=' + subType : ''}`);
}