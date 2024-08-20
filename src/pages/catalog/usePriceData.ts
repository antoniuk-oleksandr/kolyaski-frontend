import {useEffect, useRef, useState} from "react";
import {CatalogSlice} from "@/types/CatalogSlice";

export const usePriceData = (
    catalogSlice: CatalogSlice,
) => {
    const [priceData, setPriceData] = useState([-1, -1] as [number, number]);
    const {priceFrom, priceTo} = catalogSlice;
    const initialValues = useRef<[number, number]>([-1, -1]);

    useEffect(() => {
        if (!priceFrom || !priceTo) return;

        initialValues.current = [priceFrom, priceTo];
        setPriceData([priceFrom, priceTo]);
    }, [priceFrom, priceTo]);

    return {priceData, setPriceData, initialValues: initialValues.current}
}