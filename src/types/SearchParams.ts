import {SortEnum} from "@/types/SortEnum";

export type SearchParams = {
    value: string | undefined,
    priceFrom: number | undefined,
    priceTo: number | undefined,
    type: string | undefined,
    subType: string | undefined,
    sortType: SortEnum | undefined,
}