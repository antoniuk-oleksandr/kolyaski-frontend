import {handlePriceInput} from "@/pages/catalog/handlers";
import {Dispatch, SetStateAction} from "react";
import {PriceData} from "@/types/PriceData";
import {isPriceError} from "@/pages/catalog/helpers";
import { useFormContext } from "react-hook-form";
import {InvalidPrice} from "@/types/InvalidPrice";

type ProductPriceInputElementProps = {
    index: number,
    priceData: [number, number],
    setPriceData: Dispatch<SetStateAction<[number, number]>>,
}

const ProductPriceInputElement = (props: ProductPriceInputElementProps) => {
    const {index, priceData, setPriceData} = props;
    const error = useFormContext().formState.errors.sliderValue?.message as InvalidPrice | undefined;

    return (
        <input
            autoComplete={"off"}
            value={priceData[index] === -1 ? "..." : priceData[index]}
            id={`price-input-${index}`}
            onChange={(e) => handlePriceInput(e, setPriceData)}
            className={`ring-1 ring-neutral-300 duration-200 ease-out h-full rounded-md focus:ring-primary px-3 w-1/3 outline-none 
            ${isPriceError(index, error) ? '!ring-red-500' : ''}`}
            type="text"
        />
    )
}

export default ProductPriceInputElement;