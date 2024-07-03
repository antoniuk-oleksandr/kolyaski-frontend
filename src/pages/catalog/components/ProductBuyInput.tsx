import {useState} from "react";
import {handleProductBuyInputChange} from "@/pages/catalog/handlers";
import {useFormContext} from "react-hook-form";

const ProductBuyInput = () => {
    const [inputValue, setInputValue] = useState<string>("1");
    const {register} = useFormContext();

    return (
        <input
            {...register('quantity', {required: true, valueAsNumber: true, min: 1})}
            value={inputValue}
            onChange={(e) => handleProductBuyInputChange(e, setInputValue)}
            className={"buy-product-input w-24 text-center outline-none px-3 rounded-md"}
            type="text"
        />
    )
}

export default ProductBuyInput;