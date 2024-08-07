import {ProductData} from "@/types/ProductData";

export type AdminProductsState = {
    page: number | null,
    value: string | null,
    products: ProductData[] | null,
}