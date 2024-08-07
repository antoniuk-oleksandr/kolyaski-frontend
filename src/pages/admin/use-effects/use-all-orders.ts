import {Dispatch, useEffect} from "react";
import {getAllOrdersRequest} from "@/api/get-all-orders-request";
import {TokenInfo} from "@/types/TokenInfo";
import {tryToRefreshToken} from "@/utils/token-utils";
import {UnknownAction} from "redux";
import {setOrdersData} from "@/redux/orders-slice";
import {useRouter} from "next/router";
import {getAdminPageParams} from "@/pages/admin/comments/helpers";
import {getOrdersPageParams} from "@/pages/admin/orders/helpers";
import {OrdersPageParams} from "@/types/OrdersPageParams";

export const useAllOrders = (tokenInfo: TokenInfo, dispatch: Dispatch<UnknownAction>) => {
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;


        const getData = async () => {
            const link = '/admin/orders?page=1&sortBy=ID&sortOrder=ASC';
            let params = await getOrdersPageParams(router, link);
            let {value, page, sortOrder, sortBy} = params;
            if (!page || !sortBy || !sortOrder) return;

            await tryToRefreshToken(tokenInfo, dispatch);
            const response = await getAllOrdersRequest(tokenInfo.access.token, page, value, sortBy, sortOrder);
            dispatch(setOrdersData({...response, ...params}));
        }

        getData();
    }, [router]);
}