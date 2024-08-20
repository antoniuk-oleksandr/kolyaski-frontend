import {SortEnum} from "@/types/SortEnum";

export type SearchParams = {
    value?: string,
    priceFrom: number,
    priceTo: number,
    type?: string,
    subType?: string,
    sortType?: SortEnum,
    page: number,
}