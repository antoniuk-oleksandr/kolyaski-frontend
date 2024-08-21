import {Dispatch, useEffect, useState} from "react";
import {TokenInfo} from "@/types/TokenInfo";
import {UnknownAction} from "redux";
import {effect} from "@preact/signals-react";
import {commentsSignal} from "@/pages/admin/signals/comments-signal";
import {getComments, getAdminPageParams} from "@/pages/admin/comments/helpers";
import {NextRouter} from "next/router";
import {setCommentsSearchData} from "@/redux/comments-slice";
import {setAdminProductsData} from "@/redux/admin-products-slice";

export const useAllComments = (
    tokenInfo: TokenInfo | null,
    dispatch: Dispatch<UnknownAction>,
    router: NextRouter,
    page: number | null,
    value: string | null,
) => {
    useEffect(() => {
        if (!router.isReady) return;
        dispatch(setCommentsSearchData({value: null}));

        const getData = async () => {
            const data = await getAdminPageParams(router, "/admin/comments?page=1");
            if (data.value === null || data.page === null) return;
            dispatch(setCommentsSearchData({...data}));
            await getComments(tokenInfo, dispatch, data.page, data.value);
        }

        getData();
    }, [router]);

    useEffect(() => {
        const dispose = effect(() => {
            const commentsValue = commentsSignal.value;
            if (commentsValue === 0) return;

            const getData = async () => {
                if (!page || value === null) return;
                await getComments(tokenInfo, dispatch, page, value);
            }

            getData();
        });

        return () => dispose();
    }, [page, value]);
}
