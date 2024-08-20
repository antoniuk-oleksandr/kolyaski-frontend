import {UnknownAction} from "redux";
import {Dispatch, useEffect} from "react";
import {NextRouter} from "next/router";
import {setCatalogData} from "@/redux/catalog-slice";
import {SortEnum} from "@/types/SortEnum";
import {makeCatalogUrl} from "@/pages/catalog/helpers";
import {CatalogSlice} from "@/types/CatalogSlice";
import {getSearchRequest} from "@/api/get-search-request";

export const useCatalogSearchParams = (
    dispatch: Dispatch<UnknownAction>,
    router: NextRouter,
) => {
    useEffect(() => {
        if (!router.isReady) return;

        const getParams = async () => {
            const {sortType, page} = router.query;
            if (!sortType || !page) {
                const params = {sortType: SortEnum.POPULARITY, page: 1, ...router.query} as CatalogSlice;
                await router.push(makeCatalogUrl(params));
            } else {
                const params = {...(router.query as unknown as CatalogSlice)};
                console.log("params", params);
                const response = await getSearchRequest(params);
                console.log("response", response);
                dispatch(setCatalogData({...params, ...response}));
            }
        }

        getParams();
    }, [router]);
}