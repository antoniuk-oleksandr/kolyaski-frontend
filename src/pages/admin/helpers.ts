import {NextRouter} from "next/router";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {setCommentsSearchValue} from "@/redux/comments-slice";
import {setOrdersSearchValue} from "@/redux/orders-slice";
import {makeProductsLink} from "@/pages/admin/products/helpers";
import {AdminProductsState} from "@/types/AdminProductsState";

export const commentsSearchSubmitAction = (
    router: NextRouter,
    dispatch: Dispatch<UnknownAction>,
    params: any,
) => {
    const {page, value, search} = params;
    dispatch(setCommentsSearchValue(value));
    router.push(`/admin/comments?page=${page}${search === "" ? "" : `&value=${value}`}`);
}

export const ordersSearchSubmitAction = (
    router: NextRouter,
    dispatch: Dispatch<UnknownAction>,
    params: any,
) => {

    const {page, value, sortBy, sortOrder, search} = params;
    dispatch(setOrdersSearchValue(value));
    router.push(`/admin/orders?page=${page}&sortBy=${sortBy}&sortOrder=${sortOrder}${search === "" ? "" : `&value=${value}`}`);
}

export const productsSearchSubmitAction = (
    router: NextRouter,
    dispatch: Dispatch<UnknownAction>,
    params: any,
) => {
    const {page, value, search, type, sortType, id} = params;
    dispatch(setOrdersSearchValue(value));
    router.push(makeProductsLink(params as AdminProductsState));
}