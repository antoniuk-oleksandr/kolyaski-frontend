import ProductBuyContainerLayout from "./ProductBuyContainerLayout";
import ProductInfoBuyButton from "@/pages/catalog/components/ProductInfoBuyButton";
import ProductBuyInput from "@/pages/catalog/components/ProductBuyInput";

const ProductBuyContainer = () => {
    return (
        <ProductBuyContainerLayout>
            <ProductBuyInput/>
            <ProductInfoBuyButton/>
        </ProductBuyContainerLayout>
    )
}

export default ProductBuyContainer;