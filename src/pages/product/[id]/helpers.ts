import {BreadcrumbsItemType} from "@/types/BreadcrumbsItemType";
import {SortEnum} from "@/types/SortEnum";
import {ProductData} from "@/types/ProductData";
import {CatalogData} from "@/types/CatalogData";
import {CartItem} from "@/types/CartItem";

export const getProductItemPageBreadcrumbs = (productItem: ProductData): BreadcrumbsItemType[] => {
    let {type, subType, name} = productItem;

    return [
        {name: 'Головна', link: '/'},
        {name: 'Магазин', link: `/catalog?page=1&sortType=${SortEnum.POPULARITY}`},
        {
            name: type as string,
            link: `/catalog?type=${type?.toLowerCase()}&sortType=${SortEnum.POPULARITY}&page=1`
        },
        subType ? {
            name: subType,
            link: `/catalog?type=${type?.toLowerCase()}&subType=${subType.toLowerCase()}&sortType=${SortEnum.POPULARITY}&page=1`
        } : undefined,
        {
            name: name as string,
            link: '/'
        }
    ].filter((item): item is BreadcrumbsItemType => item !== undefined);
}

export const getPagesCountText = (catalogData: CatalogData, page: number) => {
    const {pagesCount, totalCount, products} = catalogData;

    const first = 16 * (page - 1) + 1;
    let second = 16 * page;
    if (pagesCount === page) second = totalCount;
    return `Показано ${first}–${second} із ${totalCount}`;
}

export const removeUnnecessaryFieldsFromProduct = (product: ProductData) => {
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        images: [product.images[0]],
    } as ProductData;
}
