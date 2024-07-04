import ProductPriceSliderLayout from "./ProductPriceSliderLayout";
import {RangeSlider} from "@mantine/core";
import {SearchParams} from "@/types/SearchParams";
import ProductPriceInput from "@/pages/catalog/components/ProductPriceInput/ProductPriceInput";
import {handlePriceInputChange} from "@/pages/catalog/handlers";
import {usePriceData} from "@/pages/catalog/usePriceData";

type ProductPriceSliderProps = {
    searchParams: SearchParams;
};

const ProductPriceSlider = (props: ProductPriceSliderProps) => {
    const {searchParams} = props;
    const {priceData, setPriceData} = usePriceData(searchParams);

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
