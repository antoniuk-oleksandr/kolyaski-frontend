import {getProductsText} from "@/pages/products/helpers";
import {SearchParams} from "@/types/SearchParams";

type ProductsTitleProps = {
    searchParams: SearchParams;
}

const ProductsTitle = (props: ProductsTitleProps) => {
    const {searchParams} = props;
    const productsTitle = getProductsText(searchParams)

    return (
        <h2 className={"first-letter:capitalize text-2xl py-3 font-semibold"}>{productsTitle}</h2>
    )
}

export default ProductsTitle;