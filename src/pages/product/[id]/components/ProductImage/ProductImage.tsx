import ProductImageLayout from "./ProductImageLayout";
import Image from "next/image";
import {Dispatch, SetStateAction, useState} from "react";
import ProductImageZoomElement from "@/pages/product/[id]/components/ProductImageZoomElement";
import ProductImagesViewOpenButton from "@/pages/product/[id]/components/ProductImagesViewOpenButton";

type ProductImageProps = {
    setSelectedSlideIndex: Dispatch<SetStateAction<number>>,
    selectedSlideIndex: number,
    images: string[],
    imageSrc: string,
    setIsViewShown: Dispatch<SetStateAction<boolean>>,
}

const ProductImage = (props: ProductImageProps) => {
    const {imageSrc, setIsViewShown} = props;
    const [isHovered, setIsHovered] = useState(false);
    const [percentages, setPercentages] = useState<number[]>([0, 0]);

    return (
        <ProductImageLayout setIsHovered={setIsHovered}>
            <Image
                priority
                onMouseEnter={() => setIsHovered(true)}
                className={"size-full object-cover object-center"}
                width={600}
                height={720}
                src={imageSrc}
                alt={'image'}
            />
            <ProductImageZoomElement
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                percentages={percentages}
                setPercentages={setPercentages}
                src={imageSrc}
            />
            <ProductImagesViewOpenButton
                setIsViewShown={setIsViewShown}
                setIsHovered={setIsHovered}
                isHovered={isHovered}
            />
        </ProductImageLayout>
    )
}

export default ProductImage;