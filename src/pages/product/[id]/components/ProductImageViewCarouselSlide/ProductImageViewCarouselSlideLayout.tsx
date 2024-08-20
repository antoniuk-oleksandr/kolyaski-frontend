import {LayoutProps} from "@/types/LayoutProps";
import {Carousel} from "@mantine/carousel";
import {handleSlideBackdropClick} from "@/pages/product/[id]/handlers";
import {Dispatch, SetStateAction, useRef} from "react";

type ProductImageViewCarouselSlideProps = LayoutProps & {
    setIsViewShown: Dispatch<SetStateAction<boolean>>,
}

const ProductImageViewCarouselSlideLayout = (props: ProductImageViewCarouselSlideProps) => {
    const {children, setIsViewShown} = props;
    const backDropRef = useRef<HTMLDivElement | null>(null);

    return (
        <div
            ref={backDropRef}
            className={"flex items-center justify-center h-full"}
            onClick={(e) => handleSlideBackdropClick(e, setIsViewShown, backDropRef)}
        >
            <div className={"aspect-3x4 flex items-center justify-center phone:bg-white h-full phone:h-fit phone:w-full"}>
                {children}
            </div>
        </div>
    )
}

export default ProductImageViewCarouselSlideLayout;