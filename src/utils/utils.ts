export const createProductsUrl = (type: string, subType?: string,) => {
    return encodeURI(`/products?type=${type}${subType ? '&subType=' + subType : ''}`);
}

export const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}