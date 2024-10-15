import React, {Dispatch, SetStateAction} from "react";
import {NextRouter} from "next/router";
import {ProductData} from "@/types/ProductData";
import {TokenInfo} from "@/types/TokenInfo";
import {tryToRefreshToken} from "@/utils/token-utils";
import {UnknownAction} from "redux";
import {postProductRequest} from "@/api/post-product-request";
import {setNotification} from "@/utils/utils";
import {
    getCategoryCheckboxMap,
    incrementNewProductModalSignal, makeCategoryMap,
    selectCategory,
    toggleCategorySelection
} from "@/pages/admin/products/new/helpers";
import {postCategoriesRequest} from "@/api/post-categories-request";
import {CategoryCheckboxMap} from "@/types/CategoryCheckboxMap";
import {postProductFileByCategoriesRequest} from "@/api/post-product-file-by-categories-request";

export const handleNewProductButtonSubmit = async (
    setSending: Dispatch<SetStateAction<boolean>>,
    router: NextRouter,
    data: ProductData,
    tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>,
) => {
    setSending(true);
    await tryToRefreshToken(tokenInfo, dispatch, router);
    let copy = {...data};
    // @ts-ignore
    copy.subType = copy.subType === "" ? null : copy.subType;
    const status = await postProductRequest(copy, tokenInfo.access.token);
    await router.push("/admin/products");
    setSending(false);
    if (status === 200) setNotification(`Товар було успішно створено`, true);
    else setNotification(`Виникла помилка під час створення товару`, false);
}

export const handleProductFileUpload = async (
    router: NextRouter,
    files: File[],
    tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>,
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
    setValue: (name: string, value: any) => void,
    defaultOption: string,
) => {
    await tryToRefreshToken(tokenInfo, dispatch, router);
    const {data, status} = await postCategoriesRequest(tokenInfo.access.token, files[0]);

    if (status !== 200) {
        setNotification(`Виникла помилка під час завантаження файлу`, false);
        incrementNewProductModalSignal("close");
    } else {
        setValue("file", files[0]);
        setSelectedCategories(getCategoryCheckboxMap(data.categories, defaultOption));
    }
}

export const handleNewProductModalSubmit = async (
    router: NextRouter,
    file: File | null,
    tokenInfo: TokenInfo,
    dispatch: Dispatch<UnknownAction>,
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
    selectedCategories: CategoryCheckboxMap | null,
) => {
    if (!selectedCategories || !file) return;

    const categories = makeCategoryMap(selectedCategories);

    await tryToRefreshToken(tokenInfo, dispatch, router);
    const {status} = await postProductFileByCategoriesRequest(
        tokenInfo.access.token, file, categories
    );

    console.log(status);

    if (status === 200) setNotification(`Товари було успішно завантажено`, true);
    else setNotification(`Виникла помилка під час завантаження файлу`, false);

    setSelectedCategories(null);
    incrementNewProductModalSignal("close");
    await router.push("/admin/products");
}

export const handleCategoryClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    mapKey: string,
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
) => {
    if (e.target !== e.currentTarget || e.target ! instanceof HTMLParagraphElement) return;
    toggleCategorySelection(mapKey, setSelectedCategories)
}

export const handleCategorySelect = (
    value: string | null,
    mapKey: string,
    setSelectedCategories: Dispatch<SetStateAction<CategoryCheckboxMap | null>>,
) => {
    if (!value) return

    selectCategory(mapKey, value, setSelectedCategories)
    toggleCategorySelection(mapKey, setSelectedCategories, true)
}