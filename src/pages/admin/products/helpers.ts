import {NextRouter} from "next/router";
import {SortEnum} from "@/types/SortEnum";
import {AdminProductsState} from "@/types/AdminProductsState";

export const getAdminProductsPageParams = async (router: NextRouter, link: string,) => {
    const {page, sortType, type, value} = router.query as {
        page: string,
        value: string,
        sortType: string,
        type: string
    };
    if (page === undefined || sortType === undefined) {
        await router.push(link);
        return {
            page: null,
            value: "",
            sortTYpe: null,
            type: null,
        }
    }

    return {
        page: parseInt(page),
        value: value === undefined ? '' : String(value),
        type: [undefined, "Всі"].includes(type) ? '' : String(type),
        sortType: sortType as SortEnum,
    }
}

export const handleAdminProductsChange = (
    router: NextRouter,
    state: AdminProductsState,
    newSortType?: null | string,
    newType?: string | null,
) => {
    const {value, sortType, type} = state;

    const valuePart = value === "" ? "" : `&value=${value}`;
    const sortTypePart = newSortType ? `&sortType=${newSortType}` : `&sortType=${sortType}`;
    const typePart = newType ? `&type=${newType}` : `&type=${type}`;

    router.push(`/admin/products?page=1${valuePart}${sortTypePart}${typePart}`);
}

export const makeProductsLink = (
    adminProductsState: AdminProductsState,
    id?: number,
    linkType?: "new" | "edit" | "all",
) => {
    const {page, value, sortType, type} = adminProductsState;
    const pagePart = `page=${page}`;
    const valuePart = value === undefined ? "" : `&value${value}`;
    const sortTypePart = `&sortType=${sortType}`;
    const typePart = [undefined, "", null].includes(type)  ? "" : `&type=${type}`;
    const idPart = id === undefined ? "" : `/${id}`;

    if(linkType === "new")
        return `/admin/products/new${idPart}?${pagePart}${valuePart}${sortTypePart}${typePart}`;

    return `/admin/products${idPart}?${pagePart}${valuePart}${sortTypePart}${typePart}`;
}