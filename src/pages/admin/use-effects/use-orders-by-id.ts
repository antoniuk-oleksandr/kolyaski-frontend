import {Dispatch, useEffect, useRef} from "react";
import {TokenInfo} from "@/types/TokenInfo";
import {tryToRefreshToken} from "@/utils/token-utils";
import {UnknownAction} from "redux";
import {setOrdersData} from "@/redux/orders-slice";
import {useRouter} from "next/router";
import {getOrdersPageParams} from "@/pages/admin/orders/helpers";
import {getOrderByIdRequest} from "@/api/get-order-by-id-request";
import {setCartProducts} from "@/redux/cart-slice";
import {OrderType} from "@/types/OrderType";

export const useOrderById = (tokenInfo: TokenInfo, dispatch: Dispatch<UnknownAction>) => {
    const router = useRouter();
    const initialOrderData = useRef<null | OrderType>(null);

    useEffect(() => {
        if (!router.isReady) return;

        const getData = async () => {
            let id = parseInt(router.query.id as string);
            const link = `/admin/orders/${id}?page=1&sortBy=ID&sortOrder=ASC`;
            let params = await getOrdersPageParams(router, link);
            let {value, page, sortOrder, sortBy} = params;
            if (!page || !sortBy || !sortOrder || !id) return;

            await tryToRefreshToken(tokenInfo, dispatch, router);
            const orderById = await getOrderByIdRequest(tokenInfo.access.token, page, value, sortBy, sortOrder, id);
            initialOrderData.current = orderById;
            dispatch(setCartProducts(orderById.products));
            dispatch(setOrdersData({orderById, ...params}));
        }

        getData();
    }, [router]);

    return {initialOrderData};
}