import {ProductData} from "@/types/ProductData";
import {SortEnum} from "@/types/SortEnum";

export type AdminProductsState = {
    page: number | null,
    value: string | null,
    products: ProductData[] | null,
    onPageCount: number | null,
    totalCount: number | null,
    sortType: SortEnum | null,
    type: string | null,
    productById: ProductData | null,
}