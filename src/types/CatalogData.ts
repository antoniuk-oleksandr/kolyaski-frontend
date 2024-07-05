import {ProductData} from "@/types/ProductData";

export type CatalogData = {
    pagesCount: number,
    totalCount: number,
    products: ProductData[],
}