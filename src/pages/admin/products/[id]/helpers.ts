import {NextRouter} from "next/router";
import {SortEnum} from "@/types/SortEnum";
import {ProductData} from "@/types/ProductData";

export const getAdminProductByIdPageParams = async (router: NextRouter) => {
    const {page, sortType, type, value, id} = router.query as {
        page: string,
        value: string,
        sortType: string,
        type: string,
        id: string,
    };
    if (page === undefined || sortType === undefined) {
        await router.push(`/admin/products/${id}?sortType=${SortEnum.POPULARITY}&page=1`);
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
    let differentData = {} as any;
    Object.entries(initialProductData).forEach(([key, value]) => {
        if (key === "images") return;
        if (value !== (newProductData as any)[key]) {
            (differentData as any)[key] = (newProductData as any)[key];
        }
    });
    if (checkEditProductImages(initialProductData.images, newProductData.images))
        differentData.images = newProductData.images;

    return differentData;
}