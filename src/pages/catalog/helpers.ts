import {BreadcrumbsItemType} from "@/types/BreadcrumbsItemType";
import {makeSearchParams} from "@/utils/utils";
import {z} from "zod";
import {InvalidPrice} from "@/types/InvalidPrice";
import {CatalogSlice} from "@/types/CatalogSlice";

export const getProductsBreadcrumbsItems = (
    catalogSlice: CatalogSlice,
): BreadcrumbsItemType[] => {
    const items: BreadcrumbsItemType[] = [];
    const {type, subType} = catalogSlice;

    if (!type) return items;
    items.push({name: type, link: `/catalog?type=${type}`});

    if(!subType) return items;
    items.push({
        name: subType,
        link: `/catalog${items.length === 0 ? '?' : '&'}subType=${subType}`,
    });

    return items;
}

export const getProductsText = (
    catalogSlice: CatalogSlice
) => {
    const {type, subType, value} = catalogSlice;
    if (value !== null) return `Результати пошуку: "${value}"`;
    if (subType !== null) return subType;
    if (type !== null) return type;
    else return 'Магазин';
}

export const getPriceRangeSchema = (
    initialValues: [number, number],
) => {
   return  z.object({
        sliderValue: z
            .array(z.number())
            .length(2)
            .refine((arr) => arr[1] > arr[0], {
                message: InvalidPrice.Third,
            })
            .refine((arr) => arr[0] >= initialValues[0], {
                message: InvalidPrice.First,
            })
            .refine((arr) => arr[1] <= initialValues[1], {
                message: InvalidPrice.Second,
            }),
    });
}

export const isPriceError = (
    index: number,
    error?: InvalidPrice,
) => {
    if (index === 0 && error === InvalidPrice.First) return true;
    else if (index === 1 && error === InvalidPrice.Second) return true;
    else if (error === InvalidPrice.Third) return true;
    return false;
}

export const makeCatalogUrl = (
    catalogSlice: CatalogSlice,
) => {
    const params = makeSearchParams(catalogSlice);
    return `/catalog?${params}`;
}