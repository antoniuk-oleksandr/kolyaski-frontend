import {SortEnum} from "@/types/SortEnum";
import {NextRouter} from "next/router";
import {pageTitles} from "@/common-components/Header/page-titles";
import {successDialogSignal} from "@/common-components/SuccessDialog/success-dialog-signal";

export const createCatalogUrl = (type: string, subType?: string,) => {
    return encodeURI(`/catalog?type=${type}${subType ? '&subType=' + subType : ''}&sortType=${SortEnum.POPULARITY}&page=1&priceFrom=10900&priceTo=21600`);
}

export const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const isPositiveNumber = (value: string) => {
    const pattern = /^\d*$/;
    return pattern.test(value);
}

export const getEnumKeyByValue = (enumObj: any, value: string) => {
    return Object.keys(enumObj).find(key => enumObj[key] === value);
}

export const getPageTitle = (router: NextRouter) => {
    const {value, type, subType} = router.query;

    if (router.pathname === "/catalog") {
        if (value !== undefined) return `Ви шукали ${value as string}`;
        if (subType !== undefined) return capitalizeFirstLetter(subType as string);
        if (type !== undefined) return capitalizeFirstLetter(type as string);
        else return "Магазин";
    }
    if(router.pathname.includes("admin")) return "Панель адміністратора";
    return pageTitles[router.pathname as keyof typeof pageTitles];
}

export const getHost = () => {
    return "localhost:8080";
}

export const setNotification = (text: string, success: boolean) => {
    successDialogSignal.value = {
        value: ++successDialogSignal.value.value,
        text,
        success
    }
}