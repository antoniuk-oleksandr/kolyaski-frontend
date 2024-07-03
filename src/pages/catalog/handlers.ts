import {SortEnum} from "@/types/SortEnum";
import {NextRouter} from "next/router";
import {SearchParams} from "@/types/SearchParams";
import {RangeSliderValue} from "@mantine/core";
import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {PriceData} from "@/types/PriceData";
import {isPositiveNumber} from "@/utils/utils";
import {convertToArrOfNumber, convertToArrOfString, priceInputSchema} from "@/pages/catalog/helpers";
import {z} from "zod";
import {InvalidPrice} from "@/types/InvalidPrice";

export const handleProductSortTypeChange = (
    value: SortEnum,
    router: NextRouter,
    searchParams: SearchParams,
) => {
    searchParams.sortType = value.toLowerCase() as SortEnum;
    const res = new URLSearchParams(searchParams as unknown as Record<string, string>);
    router.push(`/catalog?${res.toString()}`)
}

export const handlePriceFormSubmit = (
    value: RangeSliderValue,
    searchParams: SearchParams,
    router: NextRouter,
) => {
    console.log("submit");

    searchParams.priceFrom = value[0];
    searchParams.priceTo = value[1];
    const res = new URLSearchParams(searchParams as unknown as Record<string, string>);
    router.push(`/catalog?${res.toString()}`)
}

export const handlePriceInput = (
    e: ChangeEvent<HTMLInputElement>,
    setPriceData: Dispatch<SetStateAction<PriceData>>,
) => {
    let {id, value} = e.currentTarget;
    const index = parseInt(id.slice(id.length - 1)) as number;

    if (!isPositiveNumber(value)) return;

    setPriceData((prev) => {
        const newPriceData = {...prev};
        newPriceData.priceInputValue = [...prev.priceInputValue];
        newPriceData.priceInputValue[index] = value;

        try {
            priceInputSchema.parse(convertToArrOfNumber(newPriceData.priceInputValue));
            newPriceData.error = InvalidPrice.Nothing;
        } catch (error) {
            if (error instanceof z.ZodError) {
                newPriceData.error = error.errors[0]?.message as InvalidPrice;
            }
        }

        return newPriceData;
    });
}

export const handlePriceInputChange = (
    value: [number, number],
    setPriceData: Dispatch<SetStateAction<PriceData>>,
) => {
    setPriceData((prev) => {
        let newPriceData = {...prev};
        newPriceData.priceInputValue = convertToArrOfString(value);
        newPriceData.sliderValue = value;

        try {
            priceInputSchema.parse(value);
            newPriceData.error = InvalidPrice.Nothing;
        } catch (error) {
            if (error instanceof z.ZodError) {
                newPriceData.error = error.errors[0]?.message as InvalidPrice;
            }
        }

        return newPriceData;
    })
}

export const handleProductBuyInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    setInputValue: Dispatch<SetStateAction<string>>,
) => {
    const {value} = e.currentTarget;
    if (!isPositiveNumber(value)) return;

    setInputValue(value);
}

export const handleProductBuyFormSubmit = (data: any) => {
    console.log(data);
}