import ProductCardInfoLayout from "./ProductCardInfoLayout";
import {NumberFormatter} from "@mantine/core";
import {ProductData} from "@/types/ProductData";
import ProductCardButton from "../ProductCardButton";

type ProductCardInfoProps = ProductData;

const ProductCardInfo = (props: ProductCardInfoProps) => {
    const {name, price} = props;

    return (
        <ProductCardInfoLayout>
            <h3 className="text-sm font-medium">{name}</h3>
            <p className="text-xl font-medium text-primary mt-2">
                <NumberFormatter thousandSeparator=" " value={price} suffix="₴"/>
            </p>
            <ProductCardButton/>
        </ProductCardInfoLayout>
    )
}

export default ProductCardInfo;