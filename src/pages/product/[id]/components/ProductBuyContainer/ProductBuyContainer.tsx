import ProductBuyContainerLayout from "./ProductBuyContainerLayout";
import ProductInfoBuyButton from "@/pages/catalog/components/ProductInfoBuyButton";
import ProductBuyInput from "@/pages/catalog/components/ProductBuyInput";
import {ProductData} from "@/types/ProductData";
import {useSelector} from "react-redux";
import {useProductBuyButton} from "@/pages/product/[id]/use-product-buy-button";

type ProductBuyContainerProps = {
    product: ProductData,
};

const ProductBuyContainer = (props: ProductBuyContainerProps) => {
    const {product} = props;
    const {quantity} = product;
    const {cart} = useSelector((state: any) => state);
    const {inCart} = useProductBuyButton(cart, product);

    if(inCart === null) return null;
    return (
        <ProductBuyContainerLayout {...props}>
            <ProductBuyInput/>
            <ProductInfoBuyButton notAvailable={quantity === 0} inCart={inCart}/>
        </ProductBuyContainerLayout>
    )
}

export default ProductBuyContainer;