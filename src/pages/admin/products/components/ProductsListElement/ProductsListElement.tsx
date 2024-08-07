import ProductsListElementLayout from "./ProductsListElementLayout";
import {ProductData} from "@/types/ProductData";

type ProductsListElementProps = {
    item: ProductData,
}

const ProductsListElement = (props: ProductsListElementProps) => {
    const {item} = props;
    const {name} = item;

    return (
        <ProductsListElementLayout>
            <div>

            </div>
            <span>{name}</span>
        </ProductsListElementLayout>
    )
}

export default ProductsListElement;