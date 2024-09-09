import {NextRouter} from "next/router";
import {OrdersSortByEnum} from "@/types/OrdersSortByEnum";
import {OrdersState} from "@/types/OrdersState";
import {OrderType} from "@/types/OrderType";
import {Dispatch, MutableRefObject, SetStateAction} from "react";
import {compareOrderDataPieces} from "@/pages/admin/orders/[id]/helpers";
import {patchOrderRequest} from "@/api/patch-order-request";
import {TokenInfo} from "@/types/TokenInfo";
import {tryToRefreshToken} from "@/utils/token-utils";
import {UnknownAction} from "redux";
import {setNotification} from "@/utils/utils";

export const handleOrdersHeadClick = async (
    router: NextRouter,
    changeToSortBy: OrdersSortByEnum,
    ordersState: OrdersState,
) => {
    const {page, value, sortBy, sortOrder} = ordersState;
    if (sortBy === changeToSortBy) {
        await router.push(`/admin/orders?page=${page}&sortBy=${changeToSortBy}&sortOrder=${sortOrder === "ASC" ? "DESC" : "ASC"}${value === '' ? '' : `&value=${value}`}`);
    } else {
        await router.push(`/admin/orders?page=${page}&sortBy=${changeToSortBy}&sortOrder=ASC${value === '' ? '' : `&value=${value}`}`);
    }
}

export const handleOrderByIdFormSubmit = async (
    data: OrderType,
    initialOrderDataRef: MutableRefObject<OrderType | null>,
    setSending: Dispatch<SetStateAction<boolean>>,
    tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>,
    router: NextRouter,
    id?: number,
) => {
    if(!id) return;

    setSending(true);
    const differentData = compareOrderDataPieces(initialOrderDataRef, data);

    await tryToRefreshToken(tokenInfo, dispatch, router);
    const status = await patchOrderRequest(id, differentData, tokenInfo.access.token);

    await router.push("/admin/orders");

    if(status === 200) setNotification("Замовлення було усмішно відредаговано", true);
    else setNotification("Виникла помилка під час редагування замовлення", false);
    setSending(false);
}