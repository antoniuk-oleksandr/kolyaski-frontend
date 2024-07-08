import ProductItemInfoLayout from "./ProductItemInfoLayout";
import {ProductData} from "@/types/ProductData";
import {NumberFormatter} from "@mantine/core";
import ProductBuyContainer from "@/pages/product/[id]/components/ProductBuyContainer/ProductBuyContainer";

type ProductItemInfoProps = ProductData;

const ProductItemInfo = (props: ProductItemInfoProps) => {
    const {name, price} = props;

    return (
        <ProductItemInfoLayout>
            <p className={"text-2xl"}>{name}</p>
            <NumberFormatter
                className="text-2xl "
                thousandSeparator=" "
                value={price}
                suffix="₴"
            />
            <ProductBuyContainer product={props}/>
        </ProductItemInfoLayout>
    )
}

export default ProductItemInfo;