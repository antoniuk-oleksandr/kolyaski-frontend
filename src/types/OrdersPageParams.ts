import {OrdersSortByEnum} from "@/types/OrdersSortByEnum";
import {SortOrderEnum} from "@/types/SortOrderEnum";

export type OrdersPageParams = {
    page: null,
    value: string,
    sortBy: null,
    sortOrder: null,
} | {
    page: number
    value: string
    sortBy: string
    sortOrder: string
}