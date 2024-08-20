import {SearchParams} from "@/types/SearchParams";
import { getProductsText } from "../helpers";
import {CatalogSlice} from "@/types/CatalogSlice";

type ProductsTitleProps = {
    catalogSlice: CatalogSlice,
}

const ProductsTitle = (props: ProductsTitleProps) => {
    const {catalogSlice} = props;
    const productsTitle = getProductsText(catalogSlice);

    return (
        <h2 className={"first-letter:capitalize text-2xl py-3 font-semibold"}>{productsTitle}</h2>
    )
}

export default ProductsTitle;