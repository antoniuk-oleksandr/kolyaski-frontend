import {Dispatch, useEffect} from "react";
import {UnknownAction} from "redux";
import {getProductByIdRequest} from "@/api/get-product-by-id-request";
import {getAdminProductByIdPageParams} from "@/pages/admin/products/[id]/helpers";
import {NextRouter} from "next/router";
import {tryToRefreshToken} from "@/utils/token-utils";
import {TokenInfo} from "@/types/TokenInfo";
import {setAdminProductsData} from "@/redux/admin-products-slice";
import {SortEnum} from "@/types/SortEnum";

export const useAdminProductById = (
    dispatch: Dispatch<UnknownAction>,
    router: NextRouter,
    tokenInfo: TokenInfo,
) => {
    useEffect(() => {
        if (!router.isReady) return;

        const getData = async () => {
            const params = await getAdminProductByIdPageParams(router);
            const {id, page} = params;
            if (id === null || page === null) return;

            await tryToRefreshToken(tokenInfo, dispatch);
            const response = await getProductByIdRequest(id as number);
            dispatch(setAdminProductsData({
                productById: response.product,
                ...params,
            }));
        }

        getData();
    }, [router]);
}