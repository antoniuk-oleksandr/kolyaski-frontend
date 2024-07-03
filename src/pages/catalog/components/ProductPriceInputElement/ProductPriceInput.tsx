import {handlePriceInput} from "@/pages/catalog/handlers";
import {Dispatch, SetStateAction} from "react";
import {PriceData} from "@/types/PriceData";
import {isPriceError} from "@/pages/catalog/helpers";

type ProductPriceInputElementProps = {
    index: number,
    priceData: PriceData,
    setPriceData: Dispatch<SetStateAction<PriceData>>,
}

const ProductPriceInputElement = (props: ProductPriceInputElementProps) => {
    const {index, priceData, setPriceData} = props;
    const {priceInputValue, error} = priceData;

    return (
        <input
            autoComplete={"off"}
            value={priceInputValue[index]}
            id={`price-input-${index}`}
            onChange={(e) => handlePriceInput(e, setPriceData)}
            className={`ring-1 ring-neutral-300 duration-200 ease-out h-full rounded-md focus:ring-primary px-3 w-1/3 outline-none 
            ${isPriceError(index, error) ? '!ring-red-500' : ''}`}
            type="text"
        />
    )
}

export default ProductPriceInputElement;