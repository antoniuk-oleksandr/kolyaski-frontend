import {BreadcrumbsItemType} from "@/types/BreadcrumbsItemType";
import {SortEnum} from "@/types/SortEnum";
import {ProductData} from "@/types/ProductData";

export const getProductItemPageBreadcrumbs = (productItem: ProductData): BreadcrumbsItemType[] => {
    let {type, subType, name} = productItem;

    return [
        {name: 'Головна', link: '/'},
        {name: 'Магазин', link: '/catalog'},
        {
            name: type as string,
            link: `/catalog?type=${type}&sortType=${SortEnum.POPULARITY}`
        },
        subType ? {
            name: subType,
            link: `/catalog?type=${type}&subType=${subType}&sortType=${SortEnum.POPULARITY}`
        } : undefined,
        {
            name: name as string,
            link: '/'
        }
    ].filter((item): item is BreadcrumbsItemType => item !== undefined);
}

