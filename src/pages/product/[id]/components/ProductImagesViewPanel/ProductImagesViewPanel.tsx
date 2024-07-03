import ProductImagesViewPanelLayout from "./ProductImagesViewPanelLayout";
import {Dispatch, SetStateAction} from "react";
import ProductImagesViewPanelLeftSide
    from "@/pages/product/[id]/components/ProductImagesViewPanelLeftSide/ProductImagesViewPanelLeftSide";
import ProductImagesViewPanelRightSide
    from "@/pages/product/[id]/components/ProductImagesViewPanelRightSide/ProductImagesViewPanelRightSide";

type ProductImagesViewPanelProps = {
    setIsViewShown: Dispatch<SetStateAction<boolean>>,
    idle: boolean,
    selectedSlideIndex: number,
    numberOfSlides: number,
}

const ProductImagesViewPanel = (props: ProductImagesViewPanelProps) => {

    return (
        <ProductImagesViewPanelLayout {...props}>
            <ProductImagesViewPanelLeftSide {...props}/>
            <ProductImagesViewPanelRightSide{...props}/>
        </ProductImagesViewPanelLayout>
    )
}

export default ProductImagesViewPanel;