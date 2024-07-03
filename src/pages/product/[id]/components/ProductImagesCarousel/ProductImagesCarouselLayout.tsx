import {LayoutProps} from "@/types/LayoutProps";

const ProductImagesCarouselLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"mt-6 flex-1"}>
            {children}
        </div>
    )
}

export default ProductImagesCarouselLayout;