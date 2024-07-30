import {Dispatch, useEffect, useState} from "react";
import {TokenInfo} from "@/types/TokenInfo";
import {UnknownAction} from "redux";
import {effect} from "@preact/signals-react";
import {commentsSignal} from "@/pages/admin/signals/comments-signal";
import {getComments, getCommentsParams} from "@/pages/admin/comments/helpers";
import {NextRouter} from "next/router";
import {setCommentsSearchData} from "@/redux/comments-slice";

export const useComments = (
    tokenInfo: TokenInfo | null,
    dispatch: Dispatch<UnknownAction>,
    router: NextRouter,
    page: number | null,
    value: string | null,
) => {
    useEffect(() => {
        if (!router.isReady) return;

        const getData = async () => {
            const data = await getCommentsParams(router);
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
