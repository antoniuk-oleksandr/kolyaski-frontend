import ProductImageViewCarouselSlideLayout from "./ProductImageViewCarouselSlideLayout";
import Image from "next/image";
import {Dispatch, SetStateAction} from "react";

type ProductImageViewCarouselSlideProps = {
    src: string,
    setIsViewShown: Dispatch<SetStateAction<boolean>>,
}

const ProductImageViewCarouselSlide = (props: ProductImageViewCarouselSlideProps) => {
    const { src } = props;

    return (
        <ProductImageViewCarouselSlideLayout {...props}>
            <Image
                className={"size-full object-contain object-center"}
                priority
                width={700}
                height={850}
                src={src}
                alt={'image'}
            />
        </ProductImageViewCarouselSlideLayout>
    )
}

export default ProductImageViewCarouselSlide;