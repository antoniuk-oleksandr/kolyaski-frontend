import {LayoutProps} from "@/types/LayoutProps";

const ProductPageHeadLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex items-center justify-between"}>
            {children}
        </div>
    )
}

export default ProductPageHeadLayout;