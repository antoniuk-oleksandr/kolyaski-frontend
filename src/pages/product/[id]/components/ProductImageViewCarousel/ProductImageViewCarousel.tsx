import ProductImageViewCarouselLayout from "./ProductImageViewCarouselLayout";
import '@mantine/carousel/styles.css';
import {Dispatch, Key, SetStateAction} from "react";
import ProductImageViewCarouselSlide
    from "@/pages/product/[id]/components/ProductImageViewCarouselSlide/ProductImageViewCarouselSlide";
import Carousel from "@/common-components/Carousel/Carousel";

type ProductImageViewCarouselProps = {
    idle: boolean,
    setSelectedSlideIndex: Dispatch<SetStateAction<number>>,
    selectedSlideIndex: number,
    images: string[],
    setIsViewShown: Dispatch<SetStateAction<boolean>>,
}

const ProductImageViewCarousel = (props: ProductImageViewCarouselProps) => {
    const {images, selectedSlideIndex} = props;

    return (
        <ProductImageViewCarouselLayout>
            <Carousel className={"h-full"} index={selectedSlideIndex}>
                {images.map((image, index: Key) => (
                    <ProductImageViewCarouselSlide {...props} src={image} key={index}/>
                ))}
            </Carousel>
        </ProductImageViewCarouselLayout>
    )
}

export default ProductImageViewCarousel;