import {SearchParams} from "@/types/SearchParams";
import {BreadcrumbsItemType} from "@/types/BreadcrumbsItemType";
import {capitalizeFirstLetter} from "@/utils/utils";
import {z} from "zod";
import {InvalidPrice} from "@/types/InvalidPrice";

export const getProductsPageTitle = (params: SearchParams): string => {
    const part = ' - Купити з доставкою по Україні';
    if (params.value !== undefined) return `Ви шукали ${params.value}` + part;
    if (params.subType !== undefined) return capitalizeFirstLetter(params.subType as string) + part;
    if (params.type !== undefined) return capitalizeFirstLetter(params.type as string) + part;
    return 'Магазин' + part;
}

export const getProductsBreadcrumbsItems = (params: SearchParams): BreadcrumbsItemType[] => {
    const items: BreadcrumbsItemType[] = [];

    if (params.type !== undefined) items.push({
        name: params.type,
        link: `/catalog?type=${params.type.toLowerCase()}`,
    });
    if (params.subType !== undefined) items.push({
        name: params.subType,
        link: `/catalog${items.length === 0 ? '?' : '&'}subType=${params.subType.toLowerCase()}`,
    });

    return items;
}

export const getProductsText = (params: SearchParams) => {
    if (params.value !== undefined) return `Результати пошуку: "${params.value}"`;
    if (params.subType !== undefined) return params.subType;
    if (params.type !== undefined) return params.type;
    else return 'Магазин';
}

export const getProductPriceSliderValue = (params: SearchParams): [number, number] => {
    let {priceFrom, priceTo} = params;
    priceFrom = priceFrom ? priceFrom : 10900;
    priceTo = priceTo ? priceTo : 21600;
    return [priceFrom, priceTo]
}

export const priceRangeSchema = z
    .object({
        sliderValue: z
            .array(z.number())
            .length(2)
            .refine((arr) => arr[1] > arr[0], {
                message: InvalidPrice.Third,
            })
            .refine((arr) => arr[0] >= 10900, {
                message: InvalidPrice.First,
            })
            .refine((arr) => arr[1] <= 21600, {
                message: InvalidPrice.Second,
            }),
    });

export const priceInputSchema = z
    .array(z.number())
    .length(2)
    .refine((arr) => arr[1] > arr[0], {
        message: InvalidPrice.Third,
    })
    .refine((arr) => arr[0] >= 10900, {
        message: InvalidPrice.First,
    })
    .refine((arr) => arr[1] <= 21600, {
        message: InvalidPrice.Second,
    });

export const convertToArrOfNumber = (arrOfString: [string, string]): [number, number] => {
    return [parseInt(arrOfString[0], 10), parseInt(arrOfString[1], 10)];
}

export const convertToArrOfString = (arrOfNumber: [number, number]): [string, string] => {
    return [arrOfNumber[0].toString(), arrOfNumber[1].toString()];
}

export const isPriceError = (index: number, error: InvalidPrice) => {
    if (index === 0 && error === InvalidPrice.First) return true;
    else if (index === 1 && error === InvalidPrice.Second) return true;
    else if (error === InvalidPrice.Third) return true;
    return false;
}

export const tryToRemovePrice = (searchParams: SearchParams) => {
    if (searchParams.priceFrom === undefined || Number.isNaN(Number(searchParams.priceFrom))) {
        delete searchParams.priceFrom;
    }
    if (searchParams.priceTo === undefined || Number.isNaN(Number(searchParams.priceFrom))) {
        delete searchParams.priceTo;
    }
}