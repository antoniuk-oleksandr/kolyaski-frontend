import ProductPriceSliderLayout from "./ProductPriceSliderLayout";
import {RangeSlider} from "@mantine/core";
import {SearchParams} from "@/types/SearchParams";
import {getProductPriceSliderValue} from "@/pages/catalog/helpers";
import {useEffect, useState} from "react";
import ProductPriceInput from "@/pages/catalog/components/ProductPriceInput/ProductPriceInput";
import {handlePriceInputChange} from "@/pages/catalog/handlers";
import {PriceData} from "@/types/PriceData";
import {InvalidPrice} from "@/types/InvalidPrice";

type ProductPriceSliderProps = {
    searchParams: SearchParams;
};

const ProductPriceSlider = (props: ProductPriceSliderProps) => {
    const {searchParams} = props;
    const value = getProductPriceSliderValue(searchParams);
    const [priceData, setPriceData] = useState<PriceData>({
        priceInputValue: [value[0].toString(), value[1].toString()],
        sliderValue: value,
        error: InvalidPrice.Nothing,
    })

    useEffect(() => {
        setPriceData((prev) => ({
            ...prev,
            sliderValue: [parseInt(prev.priceInputValue[0]), parseInt(prev.priceInputValue[1])],
        }))
    }, [searchParams]);


    return (
        <ProductPriceSliderLayout {...props} priceData={priceData}>
            <ProductPriceInput priceData={priceData} setPriceData={setPriceData}/>
            <RangeSlider
                value={priceData.sliderValue}
                onChange={(value) => handlePriceInputChange(value, setPriceData)}
                minRange={100}
                min={10900}
                max={21600}
                step={100}
            />
        </ProductPriceSliderLayout>
    );
};

export default ProductPriceSlider;
