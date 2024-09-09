import React, {Dispatch, MutableRefObject, SetStateAction} from "react";
import {selectAllComments} from "@/pages/admin/comments/helpers";
import {UnknownAction} from "redux";
import {
    changeCommentReadType, changeSelectedCommentsReadType,
    removeComment, setCommentChangeTypeRequestSending,
    setCommentDeleteRequestSending, setCommentsSearchValue, setReadComments,
    setUnreadComments
} from "@/redux/comments-slice";
import {deleteCommentRequest} from "@/api/delete-comment-request";
import {tryToRefreshToken} from "@/utils/token-utils";
import {TokenInfo} from "@/types/TokenInfo";
import {patchCommentsRequest} from "@/api/patch-comments-request";
import {CommentType} from "@/types/CommentType";
import {CommentsState} from "@/types/CommentsState";
import {CommentItemType} from "@/types/CommentItemType";
import {commentsSignal} from "@/pages/admin/signals/comments-signal";
import {NextRouter} from "next/router";
import {AdminSubmitActionType} from "@/types/AdminSubmitActionType";
import {SortOrderEnum} from "@/types/SortOrderEnum";
import {OrdersSortByEnum} from "@/types/OrdersSortByEnum";
import {setNotification} from "@/utils/utils";

export const handleCommentCheckboxChange = (
    id: number,
    dispatch: Dispatch<UnknownAction>,
    commentType: CommentType,
    commentsState: CommentsState,
) => {
    const {unreadComments, readComments} = commentsState;
    if (!unreadComments || !readComments) return;

    const targetList = (commentType === CommentType.Unread ? unreadComments : readComments).map((item) => ({
        ...item,
        isSelected: item.id === id ? !item.isSelected : item.isSelected
    }));

    if (commentType === CommentType.Unread) dispatch(setUnreadComments(targetList));
    else dispatch(setReadComments(targetList));
}

export const handleCommentsMainCheckboxChange = (
    setChecked: Dispatch<SetStateAction<boolean>>,
    commentItems: CommentItemType[],
    commentsState: CommentsState,
    dispatch: Dispatch<UnknownAction>,
) => {
    setChecked((prev) => {
        selectAllComments(commentItems, !prev, commentsState, dispatch);
        return !prev;
    });
}

export const handleDeleteCommentButtonClick = async (
    dispatch: Dispatch<UnknownAction>,
    idToRemove: number,
    tokenInfo: TokenInfo,
    commentType: CommentType,
    router: NextRouter,
) => {
    dispatch(setCommentDeleteRequestSending(true));
    await tryToRefreshToken(tokenInfo, dispatch, router);
    const token = tokenInfo.access.token;
    const status = await deleteCommentRequest(token, idToRemove);
    dispatch(removeComment({idToRemove, commentType}));
    dispatch(setCommentDeleteRequestSending(false));
    if (status === 200) setNotification(`Коментар було успішно видалено`, true);
    else setNotification(`Виникла помилка під час видалення коментаря`, false);
}

export const handleChangeReadTypeButtonClick = async (
    dispatch: Dispatch<UnknownAction>,
    idToChange: number,
    changeValue: boolean,
    tokenInfo: TokenInfo,
    commentType: CommentType,
    router: NextRouter,
) => {
    dispatch(setCommentDeleteRequestSending(true));
    await tryToRefreshToken(tokenInfo, dispatch, router);
    const token = tokenInfo.access.token;
    await patchCommentsRequest(token, idToChange, changeValue);
    dispatch(changeCommentReadType({idToChange, commentType}));
    dispatch(setCommentDeleteRequestSending(false));
}

export const handleCommentsReloadButtonClick = () => {
    commentsSignal.value = ++commentsSignal.value
    setNotification("Коментарі оновлено!", true);
}

export const markAllComments = async (
    commentState: CommentsState,
    markAsRead: boolean,
    dispatch: Dispatch<UnknownAction>,
    tokenInfo: TokenInfo,
    router: NextRouter,
) => {
    const {unreadComments, readComments} = commentState;
    if (!unreadComments || !readComments) return;
    dispatch(setCommentChangeTypeRequestSending(true));

    const readType = markAsRead ? CommentType.Read : CommentType.Unread;
    const targetCommentsList = readType !== CommentType.Unread ? unreadComments : readComments;

    const ids = targetCommentsList.reduce((acc: number[], item) => {
        return item.isSelected ? [...acc, item.id] : acc;
    }, []);

    await tryToRefreshToken(tokenInfo, dispatch, router);
    const token = tokenInfo.access.token;
    await Promise.all(ids.map(async (id) => {
        // await tryToRefreshToken(tokenInfo, dispatch, router);
        // const token = tokenInfo.access.token;
        await patchCommentsRequest(token, id, !markAsRead);
    }));

    dispatch(changeSelectedCommentsReadType(readType));
    dispatch(setCommentChangeTypeRequestSending(false));
}

export const handleCommentElementClick = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number,
    router: NextRouter,
    elementRef: MutableRefObject<HTMLDivElement | null>,
    page: number | null,
    value: string | null,
) => {
    if (!page || value === null) return;
    if (!(elementRef.current && e.target === elementRef.current
        || (e.target as Node).nodeName === 'SPAN')) return;

    commentsSignal.value = 0;
    router.push(`/admin/comments/${id}?page=${page}${value === "" ? "" : `&value=${value}`}`);
}

export const handleAdminSearchSubmit = (
    data: any,
    router: NextRouter,
    page: number,
    value: string,
    dispatch: Dispatch<UnknownAction>,
    submitAction: AdminSubmitActionType,
    sortBy?: OrdersSortByEnum,
    sortOrder?: SortOrderEnum,
    type?: string,
    sortType?: string,
) => {
    const {search} = data as { search: string };
    commentsSignal.value = 0;
    const params = {page, value, sortBy, sortOrder, search, type, sortType};
    submitAction(router, dispatch, params);
}