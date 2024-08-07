import {NextRouter} from "next/router";
import {OrdersSortByEnum} from "@/types/OrdersSortByEnum";
import {OrdersState} from "@/types/OrdersState";
import {OrderType} from "@/types/OrderType";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {compareOrderDataPieces} from "@/pages/admin/orders/[id]/helpers";

export const handleOrdersHeadClick = (
    router: NextRouter,
    changeToSortBy: OrdersSortByEnum,
    ordersState: OrdersState,
) => {
    const {page, value, sortBy, sortOrder} = ordersState;
    if (sortBy === changeToSortBy) {
        router.push(`/admin/orders?page=${page}&sortBy=${changeToSortBy}&sortOrder=${sortOrder === "ASC" ? "DESC" : "ASC"}${value === '' ? '' : `&value=${value}`}`);
    } else {
        router.push(`/admin/orders?page=${page}&sortBy=${changeToSortBy}&sortOrder=ASC${value === '' ? '' : `&value=${value}`}`);
    }
}

export const handleOrderByIdFormSubmit = async (
    data: OrderType,
    initialOrderDataRef: MutableRefObject<OrderType | null>,
    setSending: Dispatch<SetStateAction<boolean>>,
) => {
    setSending(true);
    const differentData = compareOrderDataPieces(initialOrderDataRef, data);
    console.log("differentData", differentData);
    setSending(false);
}