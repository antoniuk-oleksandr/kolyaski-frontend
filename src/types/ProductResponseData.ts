import {ProductData} from "@/types/ProductData";
import {RestrictedProduct} from "@/types/RestrictedProduct";

export type ProductResponseData = {
    product: ProductData,
    relatedProducts: RestrictedProduct[],
}