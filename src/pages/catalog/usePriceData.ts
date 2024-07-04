import {useEffect, useState} from "react";
import {PriceData} from "@/types/PriceData";
import {convertToArrOfString, getProductPriceSliderValue} from "@/pages/catalog/helpers";
import {InvalidPrice} from "@/types/InvalidPrice";
import {SearchParams} from "@/types/SearchParams";

export const usePriceData = (searchParams: SearchParams) => {
    const value = getProductPriceSliderValue(searchParams);
    const [priceData, setPriceData] = useState<PriceData>({
        priceInputValue: convertToArrOfString(value),
        sliderValue: value,
        error: InvalidPrice.Nothing,
    })

    useEffect(() => {
        const value = getProductPriceSliderValue(searchParams);
        setPriceData((prev) => ({
            ...prev,
            sliderValue: value,
            priceInputValue: convertToArrOfString(value),
        }))
    }, [searchParams]);

    return {priceData, setPriceData};
}