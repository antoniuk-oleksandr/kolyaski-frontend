import {OrderType} from "./OrderType";
import {OrdersSortByEnum} from "@/types/OrdersSortByEnum";
import {SortOrderEnum} from "@/types/SortOrderEnum";

export type OrdersState = {
    orders: OrderType[] | null,
    value: string | null,
    page: number | null,
    commentsOnPageCount: number | null,
    totalCommentsCount: number | null,
    sortBy: OrdersSortByEnum | null,
    sortOrder: SortOrderEnum | null,
    orderById: OrderType | undefined,
}