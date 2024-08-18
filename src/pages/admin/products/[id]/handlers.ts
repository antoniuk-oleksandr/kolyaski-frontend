import {Dispatch, SetStateAction} from "react";
import {ProductData} from "@/types/ProductData";
import {checkEditProductData} from "./helpers";
import {TokenInfo} from "@/types/TokenInfo";
import {tryToRefreshToken} from "@/utils/token-utils";
import {UnknownAction} from "redux";
import {deleteProductRequest} from "@/api/delete-product-request";
import {NextRouter} from "next/router";
import {editProductConfirmModalSignal} from "@/pages/admin/signals/edit-product-confirm-modal-signal";
import {patchProductRequest} from "@/api/patch-product-request";
import {setNotification} from "@/utils/utils";

export const handleProductImageDrop = (
    files: File[],
    setItems: Dispatch<SetStateAction<string[]>>) => {
    files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            const dataUrl = e.target?.result as string;
            setItems((current) => [dataUrl, ...current]);
        }
        reader.readAsDataURL(file);
    });
}

export const handleEditProductProduct = async (
    data: ProductData,
    setSending: Dispatch<SetStateAction<boolean>>,
    initialData: ProductData,
    tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>,
    id: number,
    router: NextRouter,
) => {
    setSending(true);
    const differentData = checkEditProductData(initialData, data);
    if (Object.keys(differentData).length === 0) return;
    await tryToRefreshToken(tokenInfo, dispatch);
    const status = await patchProductRequest(id, differentData, tokenInfo.access.token);
    setSending(false);
    await router.push("/admin/products");
    if (status === 200) setNotification(`Товар було успішно відредаговано`, true);
    else setNotification(`Виникла помилка під час редагування товару`, false);
}

export const handleDeleteProductButtonClick = async (
    setSending: Dispatch<SetStateAction<boolean>>,
    id: number,
    tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>,
    router: NextRouter,
) => {
    setSending(true);
    await tryToRefreshToken(tokenInfo, dispatch);
    const status = await deleteProductRequest(id, tokenInfo.access.token);
    await router.push("/admin/products");
    setSending(false);
    if (status === 204) setNotification(`Товар було успішно видалено`, true);
    else setNotification(`Виникла помилка під час видалення товару`, false);
}