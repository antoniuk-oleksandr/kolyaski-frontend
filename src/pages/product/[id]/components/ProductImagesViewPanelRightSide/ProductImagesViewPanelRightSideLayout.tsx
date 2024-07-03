import {LayoutProps} from "@/types/LayoutProps";

const ProductImagesViewPanelRightSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex text-white text-2xl items-center"}>
            {children}
        </div>
    )
}

export default ProductImagesViewPanelRightSideLayout;