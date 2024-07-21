import RightProductItemSideLayout from "./RightProductItemSideLayout";
import Breadcrumbs from "@/common-components/Breadcrumbs/Breadcrumbs";
import {getProductItemPageBreadcrumbs} from "@/pages/product/[id]/helpers";
import {useState} from "react";
import ProductImageContainer from "@/pages/product/[id]/components/ProductImageContainer/ProductImageContainer";
import ProductDescription from "@/pages/product/[id]/components/ProductDescription/ProductDescription";
import {ProductResponseData} from "@/types/ProductResponseData";
import RelatedProductList from "@/pages/product/[id]/components/RelatedProductList/RelatedProductList";

type RightProductItemSideProps = {
    productItem: ProductResponseData,
}

const RightProductItemSide = (props: RightProductItemSideProps) => {
    const {productItem} = props;
    const {product} = productItem;
    const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

    return (
        <RightProductItemSideLayout>
            <Breadcrumbs items={getProductItemPageBreadcrumbs(product)}/>
            <ProductImageContainer
                {...props}
                productItem={product}
                selectedSlideIndex={selectedSlideIndex}
                setSelectedSlideIndex={setSelectedSlideIndex}
            />
            <ProductDescription {...product}/>
            <RelatedProductList {...productItem}/>
        </RightProductItemSideLayout>
    )
}

export default RightProductItemSide;