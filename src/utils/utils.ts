import {SortEnum} from "@/types/SortEnum";

export const createCatalogUrl = (type: string, subType?: string,) => {
    return encodeURI(`/catalog?type=${type}${subType ? '&subType=' + subType : ''}&sortType=${SortEnum.ByPopularity}`);
}

export const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const isPositiveNumber = (value: string) => {
    const pattern = /^\d*$/;
    return pattern.test(value);
}