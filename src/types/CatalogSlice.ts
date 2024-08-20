import {ProductData} from "@/types/ProductData";

export type CatalogSlice = {
    value: string | null,
    products: ProductData[] | null,
    priceFrom: number | null,
    priceTo: number | null,
    sortType: string | null,
    page: number | string | null,
    type: string | null,
    subType: string | null,
    pagesCount: number | null,
    totalCount: number | null,
}