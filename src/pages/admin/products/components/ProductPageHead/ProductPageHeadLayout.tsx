import {LayoutProps} from "@/types/LayoutProps";

const ProductPageHeadLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex items-center justify-between gap-x-3 phone:mb-2"}>
            {children}
        </div>
    )
}

export default ProductPageHeadLayout;