import {SearchParams} from "@/types/SearchParams";
import {BreadcrumbsItemType} from "@/types/BreadcrumbsItemType";
import {capitalizeFirstLetter} from "@/utils/utils";

export const getProductsPageTitle = (params: SearchParams): string => {
    const part = ' - Купити з доставкою по Україні';
    if (params.value !== undefined) return `Ви шукали ${params.value}` + part;
    if (params.subType !== undefined) return capitalizeFirstLetter(params.subType as string) + part;
    if (params.type !== undefined) return capitalizeFirstLetter(params.type as string) + part;
    return 'Магазин' + part;
}

export const getProductsBreadcrumbsItems = (params: SearchParams): BreadcrumbsItemType[] => {
    const items: BreadcrumbsItemType[] = [];

    if (params.type !== undefined) items.push({
        name: params.type,
        link: `/products?type=${params.type}`,
    });
    if (params.subType !== undefined) items.push({
        name: params.subType,
        link: `/products${items.length === 0 ? '?' : '&'}subType=${params.subType}`,
    });

    return items;
}

export const getProductsText = (params: SearchParams) => {
    if(params.value !== undefined) return `Результати пошуку: "${params.value}"`;
    if(params.subType !== undefined) return params.subType;
    if(params.type !== undefined) return params.type;
    else return 'Магазин';
}