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
                slideSize={"20%"}
                dragFree
                align="start"
                slidesToScroll={5}
            >
                {images.map((image, index) => (
                    <Carousel.Slide
                        key={index}
                        onClick={() => setSelectedSlideIndex(index)}
                        className={`rounded-md bg-white grid place-items-center  aspect-1x1  cursor-pointer duration-200 ease-out 
                        ${index === selectedSlideIndex ? '' : 'opacity-40'}`}
                    >
                        <div className="w-full h-full relative">
                            <Image
                                priority
                                fill
                                className={"object-contain size-full"}
                                src={image}
                                alt={'image'}
                            />
                        </div>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </ProductImagesCarouselLayout>
    )
}

export default ProductImagesCarousel;