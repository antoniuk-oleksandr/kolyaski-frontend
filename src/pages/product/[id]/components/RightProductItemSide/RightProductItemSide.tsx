import RightProductItemSideLayout from "./RightProductItemSideLayout";
import {ProductData} from "@/types/ProductData";
import Breadcrumbs from "@/common-components/Breadcrumbs/Breadcrumbs";
import {getProductItemPageBreadcrumbs} from "@/pages/product/[id]/helpers";
import {useState} from "react";
import ProductImageContainer from "@/pages/product/[id]/components/ProductImageContainer/ProductImageContainer";
import ProductDescription from "@/pages/product/[id]/components/ProductDescription/ProductDescription";

type RightProductItemSideProps = {
    productItem: ProductData,
}

const RightProductItemSide = (props: RightProductItemSideProps) => {
    const {productItem} = props;
    const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

    return (
        <RightProductItemSideLayout>
            <Breadcrumbs items={getProductItemPageBreadcrumbs(productItem)}/>
            <ProductImageContainer
                {...props}
                selectedSlideIndex={selectedSlideIndex}
                setSelectedSlideIndex={setSelectedSlideIndex}
            />
            <ProductDescription {...productItem}/>
        </RightProductItemSideLayout>
    )
}

export default RightProductItemSide;