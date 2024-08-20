import ProductPriceInputLayout from "./ProductPriceInputLayout";
import SubmitPriceInputButton from "@/pages/catalog/components/SubmitPriceInputButton";
import {Dispatch, SetStateAction} from "react";
import ProductPriceInputElement from "@/pages/catalog/components/ProductPriceInputElement/ProductPriceInput";
import {PriceData} from "@/types/PriceData";

type ProductPriceInputProps = {
    priceData: [number, number],
    setPriceData: Dispatch<SetStateAction<[number, number]>>,
}

const ProductPriceInput = (props: ProductPriceInputProps) => {
    return (
        <ProductPriceInputLayout>
            <ProductPriceInputElement {...props} index={0}/>
            <span> — </span>
            <ProductPriceInputElement {...props} index={1}/>
            <SubmitPriceInputButton {...props}/>
        </ProductPriceInputLayout>
    )
}

export default ProductPriceInput;