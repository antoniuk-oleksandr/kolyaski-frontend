import ProductPriceSliderLayout from "./ProductPriceSliderLayout";
import {RangeSlider} from "@mantine/core";
import ProductPriceInput from "@/pages/catalog/components/ProductPriceInput/ProductPriceInput";
import {CatalogSlice} from "@/types/CatalogSlice";
import {useDispatch} from "react-redux";
import {usePriceData} from "@/pages/catalog/usePriceData";

type ProductPriceSliderProps = {
    catalogSlice: CatalogSlice,
};

const ProductPriceSlider = (props: ProductPriceSliderProps) => {
    const {catalogSlice} = props;
    const {priceData, setPriceData, initialValues} = usePriceData(catalogSlice);
    const firstRender = initialValues.some(value => value === -1);

    return (
        <ProductPriceSliderLayout initialValues={initialValues} priceData={priceData} {...props}>
            <ProductPriceInput setPriceData={setPriceData} priceData={priceData}/>
            <RangeSlider
                value={firstRender ? [0, 100] : priceData}
                onChange={(value) => setPriceData(value)}
                minRange={100}
                min={firstRender ? 0 : initialValues[0]}
                max={firstRender ? 100 : initialValues[1]}
                step={100}
            />
        </ProductPriceSliderLayout>
    );
};

export default ProductPriceSlider;
