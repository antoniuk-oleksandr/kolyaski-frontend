import ProductImagesCarouselLayout from "./ProductImagesCarouselLayout";
import {Carousel} from "@mantine/carousel";
import Image from "next/image";
import {Dispatch, SetStateAction} from "react";

type ProductImagesCarouselProps = {
    images: string[],
    selectedSlideIndex: number,
    setSelectedSlideIndex: Dispatch<SetStateAction<number>>,
}

const ProductImagesCarousel = (props: ProductImagesCarouselProps) => {
    const {images, selectedSlideIndex, setSelectedSlideIndex} = props;

    return (
        <ProductImagesCarouselLayout>
            <Carousel
                slideGap="sm"
                slideSize={"20%"}
                dragFree
                align="start"
                slidesToScroll={5}
            >
                {images.map((image, index) => (
                    <Carousel.Slide
                        key={index}
                        onClick={() => setSelectedSlideIndex(index)}
                        className={`rounded-md overflow-hidden cursor-pointer duration-200 ease-out 
                        ${index === selectedSlideIndex ? '' : 'opacity-40'}`}
                    >
                        <Image
                            priority
                            className={"size-full aspect-1x1 object-cover object-center"}
                            width={100}
                            height={100}
                            src={image}
                            alt={'image'}
                        />
                    </Carousel.Slide>
                ))}
            </Carousel>
        </ProductImagesCarouselLayout>
    )
}

export default ProductImagesCarousel;