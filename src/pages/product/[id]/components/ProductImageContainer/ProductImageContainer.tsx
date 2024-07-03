import ProductImageContainerLayout from "./ProductImageContainerLayout";
import ProductImage from "@/pages/product/[id]/components/ProductImage/ProductImage";
import ProductImagesCarousel from "@/pages/product/[id]/components/ProductImagesCarousel/ProductImagesCarousel";
import ProductItemInfo from "@/pages/product/[id]/components/ProductItemInfo/ProductItemInfo";
import {Dispatch, SetStateAction, useState} from "react";
import {ProductData} from "@/types/ProductData";
import Carousel from "@/common-components/Carousel/Carousel";
import ProductImagesView from "@/pages/product/[id]/components/ProductImagesView/ProductImagesView";

type ProductImageContainerProps = {
    selectedSlideIndex: number,
    setSelectedSlideIndex: Dispatch<SetStateAction<number>>,
    productItem: ProductData,
}

const ProductImageContainer = (props: ProductImageContainerProps) => {
    const {productItem, selectedSlideIndex} = props;
    const {images} = productItem;
    const [isViewShown, setIsViewShown] = useState(false);

    return (
        <ProductImageContainerLayout>
            <Carousel index={selectedSlideIndex}>
                {images.map((image, index) => (
                    <ProductImage
                        setIsViewShown={setIsViewShown}
                        key={index}
                        imageSrc={image}
                        {...props}
                        {...productItem}
                    />
                ))}
            </Carousel>
            <ProductImagesCarousel {...props} {...productItem}/>
            <ProductImagesView
                images={images}
                {...props}
                isViewShown={isViewShown}
                setIsViewShown={setIsViewShown}
            />
            <ProductItemInfo {...productItem}/>
        </ProductImageContainerLayout>
    )
}

export default ProductImageContainer;