import {SearchParams} from "@/types/SearchParams";
import {BreadcrumbsItemType} from "@/types/BreadcrumbsItemType";

export const getProductsPageTitle = (params: SearchParams): string => {
    if (params.value !== undefined) return `Ви шукали ${params.value}`;
    if (params.subType !== undefined) return params.subType as string;
    if (params.type !== undefined) return params.type as string;
    return 'error';
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