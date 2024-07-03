import {LayoutProps} from "@/types/LayoutProps";

const ProductImagesViewPanelLeftSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-1 text-white h-full items-center mx-4"}>
            {children}
        </div>
    )
}

export default ProductImagesViewPanelLeftSideLayout;