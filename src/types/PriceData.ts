import {InvalidPrice} from "@/types/InvalidPrice";

export type PriceData = {
    priceInputValue: [string, string],
    sliderValue: [number, number],
    error: InvalidPrice,
}