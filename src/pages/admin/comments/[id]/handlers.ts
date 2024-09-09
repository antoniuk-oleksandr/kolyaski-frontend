import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {UnknownAction} from "redux";
import {TokenInfo} from "@/types/TokenInfo";
import {tryToRefreshToken} from "@/utils/token-utils";
import {NextRouter} from "next/router";
import {patchCommentsRequest} from "@/api/patch-comments-request";
import {deleteCommentRequest} from "@/api/delete-comment-request";
import {ChangeHandler} from "react-hook-form";
import {commentsSignal} from "@/pages/admin/signals/comments-signal";
import {setNotification} from "@/utils/utils";

export const handleCommentsReturnBackButtonClick = (
    router: NextRouter,
    page: number,
    value: string,
) => {
    commentsSignal.value = 0;
    router.push(`/admin/comments?page=${page}${value === "" ? "" : `&value=${value}`}`)
}

export const handleDeleteCommentElementButtonClick = async (
    dispatch: Dispatch<UnknownAction>,
    idToRemove: number,
    tokenInfo: TokenInfo,
    router: NextRouter,
    setIsDisabled: Dispatch<SetStateAction<boolean>>,
) => {
    setIsDisabled(true);
    await tryToRefreshToken(tokenInfo, dispatch, router);
    const token = tokenInfo.access.token;
    const status = await deleteCommentRequest(token, idToRemove);
    commentsSignal.value = 0;
    await router.push("/admin/comments");
    setIsDisabled(false);
    if (status === 200) setNotification(`Коментар було успішно видалено`, true);
    else setNotification(`Виникла помилка під час видалення коментаря`, false);
}

export const handleChangeReadTypeToUnreadButtonClick = async (
    dispatch: Dispatch<UnknownAction>,
    idToChange: number,
    tokenInfo: TokenInfo,
    router: NextRouter,
    setIsDisabled: Dispatch<SetStateAction<boolean>>,
) => {
    setIsDisabled(true);
    await tryToRefreshToken(tokenInfo, dispatch, router);
    const token = tokenInfo.access.token;
    await patchCommentsRequest(token, idToChange, true);
    commentsSignal.value = 0;
    await router.push("/admin/comments");
    setIsDisabled(false);
}

export const handleCommentSearchInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    formOnChange: ChangeHandler,
    setInputValue: Dispatch<SetStateAction<string>>
) => {
    setInputValue(e.target.value);
    if (formOnChange) formOnChange(e);
}