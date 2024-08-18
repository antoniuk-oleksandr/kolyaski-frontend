import {Dispatch, SetStateAction} from "react";
import {NextRouter} from "next/router";
import {ProductData} from "@/types/ProductData";
import {TokenInfo} from "@/types/TokenInfo";
import {tryToRefreshToken} from "@/utils/token-utils";
import {UnknownAction} from "redux";
import {postProductRequest} from "@/api/post-product-request";
import {postProductFileRequest} from "@/api/post-product-file-request";
import {setNotification} from "@/utils/utils";
import {incrementNewProductModalSignal} from "@/pages/admin/products/new/helpers";

export const handleNewProductButtonSubmit = async (
    setSending: Dispatch<SetStateAction<boolean>>,
    router: NextRouter,
    data: ProductData,
    tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>,
) => {
    setSending(true);
    await tryToRefreshToken(tokenInfo, dispatch);
    const status = await postProductRequest(data, tokenInfo.access.token);
    await router.push("/admin/products");
    setSending(false);
    if (status === 200) setNotification(`Товар було успішно створено`, true);
    else setNotification(`Виникла помилка під час створення товару`, false);
}

export const handleNewProductModalSubmit = async (
    setSending: Dispatch<SetStateAction<boolean>>,
    router: NextRouter,
    files: File[],
    tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>,
) => {
    setSending(true);
    await tryToRefreshToken(tokenInfo, dispatch);
    let status = 200;
    await Promise.all(files.map(async (file) => {
        const oneRequestStatus = await postProductFileRequest(file, tokenInfo.access.token);
        if (oneRequestStatus !== 200) status = oneRequestStatus;
    }));
    setSending(false);
    incrementNewProductModalSignal("close");
    await router.push("/admin/products");
    if (status === 200) setNotification(`Файл${files.length === 1 ? '' : 'и'} було успішно завантажено`, true);
    else setNotification(`Виникла помилка під час завантаження файл${files.length === 1 ? 'у' : 'ів'}`, false);
}