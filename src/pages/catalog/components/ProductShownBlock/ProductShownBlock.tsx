import ProductShownBlockLayout from "./ProductShownBlockLayout";
import {CatalogData} from "@/types/CatalogData";
import {getPagesCountText} from "@/pages/product/[id]/helpers";

type ProductShownBlockProps = {
    catalogData: CatalogData | null,
    page: number,
}

const ProductShownBlock = (props: ProductShownBlockProps) => {
    const {catalogData, page} = props;
    console.log(catalogData);

    if(!catalogData) return null;
    return (
        <ProductShownBlockLayout>
            <p className={"text-sm"}>{getPagesCountText(catalogData, page)}</p>
        </ProductShownBlockLayout>
    )
}

export default ProductShownBlock;