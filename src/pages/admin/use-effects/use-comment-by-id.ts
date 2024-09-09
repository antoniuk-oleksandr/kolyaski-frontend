import {Dispatch, useEffect, useState} from "react";
import {patchCommentsRequest} from "@/api/patch-comments-request";
import {TokenInfo} from "@/types/TokenInfo";
import {tryToRefreshToken} from "@/utils/token-utils";
import {UnknownAction} from "redux";
import {useRouter} from "next/router";
import {Comment} from "@/types/Comment";
import {getAdminPageParams} from "@/pages/admin/comments/helpers";
import {setCommentsSearchData} from "@/redux/comments-slice";

export const useCommentById = (
    tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>,
) => {
    const [comment, setComment] = useState<null | Comment>(null);
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        const getData = async () => {
            const id = parseInt(router.query.id as string);

            const data = await getAdminPageParams(router, `/admin/comments/${id}?page=1`);
            if (data.value === null || data.page === null) return;
            dispatch(setCommentsSearchData({...data}));

            await tryToRefreshToken(tokenInfo, dispatch, router);
            const response = await patchCommentsRequest(tokenInfo.access.token, id, false);
            setComment(response);
        }

        getData();
    }, [router]);

    return {comment};
}