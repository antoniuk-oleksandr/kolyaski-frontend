import {LayoutProps} from "@/types/LayoutProps";

const ProductImageViewCarouselLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full h-[calc(100%-5.5rem)]"}>
            {children}
        </div>
    )
}

export default ProductImageViewCarouselLayout;