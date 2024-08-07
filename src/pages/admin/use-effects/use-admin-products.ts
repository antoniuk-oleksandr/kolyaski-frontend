import {Dispatch, useEffect} from "react";
import {NextRouter} from "next/router";
import {getAdminPageParams} from "@/pages/admin/comments/helpers";
import {getSearchRequest} from "@/api/get-search-request";
import {UnknownAction} from "redux";
import {setAdminProductsData} from "@/redux/admin-products-slice";

export const useAdminProducts = (
    router: NextRouter,
    dispatch: Dispatch<UnknownAction>,
) => {

    useEffect(() => {
        if (!router.isReady) return;

        const getData = async () => {
            const {value, page} = await getAdminPageParams(router, "/admin/products?page=1");
            if (page === null) return;

            const response = await getSearchRequest({value, page});
            console.log(response);
            dispatch(setAdminProductsData({
                products: response.products,
                pagesCount: response.pagesCount,
                productsOnPageCount: response.productsOnPageCount,
                page, value,
            }));
        }

        getData();
    }, [router]);
}