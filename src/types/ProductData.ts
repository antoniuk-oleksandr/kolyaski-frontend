import {PopularProductType} from "@/types/PopularProductType";

export type ProductData = {
    images: string[],
    name: string,
    price: number,
    id: number,
    quantity: number,
    type?: string,
    subType?: string | null,
    description: string,
    relatedProducts: PopularProductType[],
}