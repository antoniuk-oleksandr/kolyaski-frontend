import {handleProductImageMouseMove} from "@/pages/product/[id]/handlers";
import {Dispatch, SetStateAction} from "react";

type ProductImageZoomElementProps = {
    isHovered: boolean,
    setIsHovered: Dispatch<SetStateAction<boolean>>,
    src: string,
    setPercentages: Dispatch<SetStateAction<number[]>>,
    percentages: number[],
}

const ProductImageZoomElement = (props: ProductImageZoomElementProps) => {
    const {isHovered, setIsHovered, src, percentages, setPercentages} = props;

    if (!isHovered) return null;
    return (
        <div
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={(e) => handleProductImageMouseMove(e, setPercentages)}
            className="absolute cursor-crosshair inset-0 bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url(${src})`,
                backgroundPosition: `${percentages[0]}% ${percentages[1]}%`,
                backgroundSize: '250%',
            }}
        />
    )
}

export default ProductImageZoomElement;