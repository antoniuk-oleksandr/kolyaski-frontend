import ProductShownBlockLayout from "./ProductShownBlockLayout";
import {CatalogData} from "@/types/CatalogData";
import {getPagesCountText} from "@/pages/product/[id]/helpers";
import {CatalogSlice} from "@/types/CatalogSlice";

type ProductShownBlockProps = {
    catalogSlice: CatalogSlice,
}

const ProductShownBlock = (props: ProductShownBlockProps) => {
    const {catalogSlice} = props;

    return (
        <ProductShownBlockLayout>
            <p className={"text-sm"}>{getPagesCountText(catalogSlice)}</p>
        </ProductShownBlockLayout>
    )
}

export default ProductShownBlock;