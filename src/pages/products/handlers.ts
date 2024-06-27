import {SortEnum} from "@/types/SortEnum";
import {NextRouter} from "next/router";
import {SearchParams} from "@/types/SearchParams";

export const handleProductSortTypeChange = (
    value: SortEnum,
    router: NextRouter,
    searchParams: SearchParams,
) => {
    searchParams.sortType = value.toLowerCase() as SortEnum;
    const res = new URLSearchParams(searchParams as unknown as Record<string, string>);
    router.push(`/products?${res.toString()}`)
}