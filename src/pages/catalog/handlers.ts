import {SortEnum} from "@/types/SortEnum";
import {NextRouter} from "next/router";
import {RangeSliderValue} from "@mantine/core";
import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {isPositiveNumber} from "@/utils/utils";
import {makeCatalogUrl} from "@/pages/catalog/helpers";
import {UnknownAction} from "redux";
import {setCatalogData} from "@/redux/catalog-slice";
import {CatalogSlice} from "@/types/CatalogSlice";

export const handleProductSortTypeChange = async (
    newSortValue: SortEnum,
    catalogSlice: CatalogSlice,
    router: NextRouter,
) => {
    const params = {...catalogSlice, sortType: newSortValue};
    await router.push(makeCatalogUrl(params));
}

export const handlePriceFormSubmit = async (
    value: RangeSliderValue,
    catalogSlice: CatalogSlice,
    router: NextRouter,
) => {
    const params = {priceFrom: value[0], priceTo: value[1], page: 1};
    await router.push(makeCatalogUrl({...catalogSlice, ...params}));
}

export const handlePriceInput = (
    e: ChangeEvent<HTMLInputElement>,
    setPriceData: Dispatch<SetStateAction<[number, number]>>,
) => {
    let {id, value} = e.currentTarget;
    if(value === "") value = "0";
    const index = parseInt(id.slice(id.length - 1)) as number;

    if (!isPositiveNumber(value)) return;

    setPriceData((prev) => {
        const newArr = [...prev] as [number, number];
        newArr[index] = parseInt(value);
        return newArr;
    });
}

export const handleProductBuyInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setInputValue: Dispatch<SetStateAction<string>>,
) => {
    const {value} = e.currentTarget;
    if (!isPositiveNumber(value)) return;

    setInputValue(value);
}


export const handlePageItemClick = async (
    catalogSlice: CatalogSlice,
    nextPage: number,
    router: NextRouter,
) => {
    await router.push(makeCatalogUrl({ ...catalogSlice, page: nextPage}));
}