import ProductCardInfoLayout from "./ProductCardInfoLayout";
import {NumberFormatter} from "@mantine/core";
import {ProductData} from "@/types/ProductData";
import ProductCardButton from "@/pages/products/components/ProductCardButton";

type ProductCardInfoProps = ProductData;

const ProductCardInfo = (props: ProductCardInfoProps) => {
    const {title, price} = props;

    return (
        <ProductCardInfoLayout>
            <h3 className="text-base  font-medium">{title}</h3>
            <p className="text-xl font-medium text-primary mt-2">
                <NumberFormatter thousandSeparator=" " value={price} suffix="₴"/>
            </p>
            <ProductCardButton/>
        </ProductCardInfoLayout>
    )
}

export default ProductCardInfo;