import {NextRouter} from "next/router";
import {SortEnum} from "@/types/SortEnum";
import {ProductData} from "@/types/ProductData";
import {PopularProductType} from "@/types/PopularProductType";
import {z} from "zod";

export const getAdminProductByIdPageParams = async (
    router: NextRouter,
    linkType?: "new" | "edit" | "all",
) => {
    const {page, sortType, type, value, id} = router.query as {
        page: string,
        value: string,
        sortType: string,
        type: string,
        id: string,
    };
    if (page === undefined || sortType === undefined) {
        if (linkType === "new")
            await router.push(`/admin/products/new/${id}?sortType=${SortEnum.POPULARITY}&page=1`);
        else await router.push(`/admin/products/${id}?sortType=${SortEnum.POPULARITY}&page=1`);
        return {
            page: null,
            value: "",
            sortTYpe: null,
            type: null,
            id: null,
        }
    }

    return {
        page: parseInt(page),
        value: value === undefined ? '' : String(value),
        type: [undefined, "Всі"].includes(type) ? '' : String(type),
        sortType: sortType as SortEnum,
        id: parseInt(id),
    }
}

export const checkEditProductImages = (
    initialImages: string[],
    newImages: string[],
) => {
    if (initialImages.length !== newImages.length) return true;
    return initialImages.some((image, index) => image !== newImages[index]);
}

export const checkEditProductData = (
    initialProductData: ProductData,
    newProductData: ProductData,
) => {
    let differentData = {...nullProduct} as unknown as ProductData;
    Object.entries(initialProductData).forEach(([key, value]) => {
        if (["images", "subType"].includes(key)) return;
        if (value !== (newProductData as any)[key]) {
            (differentData as any)[key] = (newProductData as any)[key];
        }
    });
    if (checkEditProductImages(initialProductData.images, newProductData.images))
        differentData.images = newProductData.images;
    if(checkEditProductSubType(initialProductData.subType, newProductData.subType))
        differentData.subType = newProductData.subType;
    return differentData;
}

export const checkEditProductSubType = (
    initial: string | null | undefined,
    edited: string | null | undefined,
) => {
    if(initial === null && edited === "Жоден") return false;
    return initial !== edited;
}

export const getEditProductRichTextEditorStyles = (isErrorPresent: boolean) => ({
    "root": {borderColor: isErrorPresent ? "red" : "", color: isErrorPresent ? "red" : ""},
    "toolbar": {borderColor: isErrorPresent ? "red" : ""},
    "control": {borderColor: isErrorPresent ? "red" : "", color: isErrorPresent ? "red" : ""}
});

const nullProduct = {
    images: null,
    name: null,
    price: null,
    quantity: null,
    type: null,
    subType: null,
    description: null,
}