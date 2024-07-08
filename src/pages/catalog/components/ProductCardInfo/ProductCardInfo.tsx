import ProductCardInfoLayout from "./ProductCardInfoLayout";
import {NumberFormatter} from "@mantine/core";
import {ProductData} from "@/types/ProductData";
import ProductCardButton from "../ProductCardButton";

type ProductCardInfoProps = ProductData;

const ProductCardInfo = (props: ProductCardInfoProps) => {
    const {name, price} = props;

    return (
        <ProductCardInfoLayout>
            <h3 className="text-sm line-clamp-2 h-10">{name}</h3>
            <p className="text-2xl font-medium text-primary mt-3">
                <NumberFormatter
                    value={price}
                    thousandSeparator={","}
                    suffix={" грн."}
                />
            </p>
            {/*<ProductCardButton/>*/}
        </ProductCardInfoLayout>
    )
}

export default ProductCardInfo;