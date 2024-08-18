import {Dispatch, useEffect} from "react";
import {getAllOrdersRequest} from "@/api/get-all-orders-request";
import {TokenInfo} from "@/types/TokenInfo";
import {tryToRefreshToken} from "@/utils/token-utils";
import {UnknownAction} from "redux";
import {setOrdersData} from "@/redux/orders-slice";
import {getOrdersPageParams} from "@/pages/admin/orders/helpers";
import {NextRouter} from "next/router";

export const useAllOrders = (
    tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>,
    router: NextRouter,
) => {
    useEffect(() => {
        if (!router.isReady) return;

        const getData = async () => {
            const link = '/admin/orders?page=1&sortBy=ID&sortOrder=ASC';
            let params = await getOrdersPageParams(router, link);
            let {value, page, sortOrder, sortBy} = params;
            if (!page || !sortBy || !sortOrder) return;

            await tryToRefreshToken(tokenInfo, dispatch);
            const response = await getAllOrdersRequest(tokenInfo.access.token, page, value, sortBy, sortOrder);
            let orders = [];
            if(response.status === 200){
                orders = response.data.orders;
            }
            dispatch(setOrdersData({orders, ...params}));
        }

        getData();
    }, [router]);
}