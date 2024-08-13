import {OrderType} from "./OrderType";
import {OrdersSortByEnum} from "@/types/OrdersSortByEnum";
import {SortOrderEnum} from "@/types/SortOrderEnum";

export type OrdersState = {
    orders: OrderType[] | null,
    value: string | null,
    page: number | null,
    onPageCount: number | null,
    totalCount: number | null,
    sortBy: OrdersSortByEnum | null,
    sortOrder: SortOrderEnum | null,
    orderById: OrderType | undefined,
}