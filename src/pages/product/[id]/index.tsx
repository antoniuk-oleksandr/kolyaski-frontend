import LeftProductItemSide from "@/pages/product/[id]/components/LeftProductItemSide/LeftProductItemSide";
import RightProductItemSide from "@/pages/product/[id]/components/RightProductItemSide/RightProductItemSide";
import {useProductItem} from "@/pages/product/[id]/use-product-item";
import HeadElement from "@/common-components/HeadElement";
import PageContentLayout from "@/common-components/PageContentLayout";

const ProductItemPage = () => {
    const {productItem} = useProductItem();

    if (!productItem) return null;
    return (
        <>
            <HeadElement pageTitle={productItem.product.name}/>
            <PageContentLayout reverse>
                <LeftProductItemSide/>
                <RightProductItemSide productItem={productItem}/>
            </PageContentLayout>
        </>
    )
}

export default ProductItemPage;