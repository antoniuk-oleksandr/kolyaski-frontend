import ProductImagesViewLayout from "./ProductImagesViewLayout";
import {Dispatch, SetStateAction} from "react";
import ProductImagesViewPanel from "@/pages/product/[id]/components/ProductImagesViewPanel/ProductImagesViewPanel";
import ProductImageViewCarousel
    from "@/pages/product/[id]/components/ProductImageViewCarousel/ProductImageViewCarousel";
import {useIdle} from "@mantine/hooks";
import ProductImagesViewCarouselButton from "@/pages/product/[id]/components/ProductImagesViewCarouselButton";

type ProductImagesViewProps = {
    isViewShown: boolean,
    setIsViewShown: Dispatch<SetStateAction<boolean>>,
    images: string[],
    setSelectedSlideIndex: Dispatch<SetStateAction<number>>,
    selectedSlideIndex: number,
}

const ProductImagesView = (props: ProductImagesViewProps) => {
    const {images} = props;
    const idle = useIdle(5000);

    return (
        <ProductImagesViewLayout {...props}>
            <ProductImagesViewPanel
                numberOfSlides={images.length}
                idle={idle}
                {...props}
            />
            <ProductImagesViewCarouselButton
                numberOfSlides={images.length}
                {...props}
                direction={'left'}
                idle={idle}
            />
            <ProductImagesViewCarouselButton
                numberOfSlides={images.length}
                {...props}
                direction={'right'}
                idle={idle}
            />
            <ProductImageViewCarousel {...props} idle={idle}/>
            <div className={"w-full h-11"}/>
        </ProductImagesViewLayout>
    )
}

export default ProductImagesView;