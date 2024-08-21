import {clearTokenInfo, tryToRefreshToken} from "@/utils/token-utils";
import {getCommentsRequest} from "@/api/get-comments-request";
import {TokenInfo} from "@/types/TokenInfo";
import {Dispatch} from "react";
import {UnknownAction} from "redux";
import {commentsSelectMenuSignal} from "@/pages/admin/signals/comments-select-menu-signal";
import {CommentItemType} from "@/types/CommentItemType";
import {setCommentsData, setReadComments, setUnreadComments} from "@/redux/comments-slice";
import {CommentType} from "@/types/CommentType";
import {CommentsState} from "@/types/CommentsState";
import {NextRouter} from "next/router";

export const getAdminPageParams = async (router: NextRouter, link: string,) => {
    const {page, value} = router.query as { page: string, value: string };
    if (page === undefined) {
        await router.push(link);
        return {
            page: null,
            value: "",
        }
    }

    return {
        page: parseInt(page),
        value: value === undefined ? '' : String(value),
    }
}

export const getComments = async (
    tokenInfo: TokenInfo | null,
    dispatch: Dispatch<UnknownAction>,
    page: number,
    value: string,
) => {

    if (tokenInfo === null || tokenInfo === undefined) return null;

    await tryToRefreshToken(tokenInfo, dispatch);
    let data = await getCommentsRequest(tokenInfo.access.token, value, page);
    if(data.status === 404) data.comments = [];
    if (!data.comments) clearTokenInfo(dispatch);
    dispatch(setCommentsData({...data}));
}

export const toggleCommentsSelectMenu = () => {
    commentsSelectMenuSignal.value = !commentsSelectMenuSignal.value;
}

export const selectAllComments = (
    commentItems: CommentItemType[],
    value: boolean,
    commentsState: CommentsState,
    dispatch: Dispatch<UnknownAction>,
) => {
    commentItems.forEach((item) =>
        selectSomeComments(commentsState, item.commentType, dispatch, value));
}

export const selectSomeComments = (
    commentsState: CommentsState,
    commentType: CommentType,
    dispatch: Dispatch<UnknownAction>,
    value: boolean,
) => {
    const {readComments, unreadComments} = commentsState;
    if (!readComments || !unreadComments) return;

    const targetList = (commentType === CommentType.Unread ? unreadComments : readComments).map((item) => ({
        ...item,
        isSelected: value,
    }));

    if (commentType === CommentType.Unread) dispatch(setUnreadComments(targetList));
    else dispatch(setReadComments(targetList));
}
