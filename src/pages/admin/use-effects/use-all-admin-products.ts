import {Dispatch, useEffect} from "react";
import {NextRouter} from "next/router";
import {getAdminPageParams} from "@/pages/admin/comments/helpers";
import {getSearchRequest} from "@/api/get-search-request";
import {UnknownAction} from "redux";
import {setAdminProductsData} from "@/redux/admin-products-slice";
import {getAdminProductsPageParams} from "@/pages/admin/products/helpers";
import {SortEnum} from "@/types/SortEnum";
import {TokenInfo} from "@/types/TokenInfo";
import {tryToRefreshToken} from "@/utils/token-utils";
import {CatalogSlice} from "@/types/CatalogSlice";

export const useAllAdminProducts = (
    router: NextRouter,
    dispatch: Dispatch<UnknownAction>,
    tokenInfo: TokenInfo,
) => {

    useEffect(() => {
        if (!router.isReady) return;
        dispatch(setAdminProductsData({productById: null, value: null}));

        const getData = async () => {
            const {
                value,
                page,
                sortType,
                type
            } = await getAdminProductsPageParams(router, `/admin/products?page=1&sortType=${SortEnum.POPULARITY}`);
            if (page === null) return;

            await tryToRefreshToken(tokenInfo, dispatch, router);
            const response = await getSearchRequest({value, page, type, sortType} as CatalogSlice);
            dispatch(setAdminProductsData({
                products: response.products,
                onPageCount: response.productsOnPageCount,
                totalCount: response.totalCount,
                page, value, sortType, type,
            }));
        }

        getData();
    }, [router]);
}