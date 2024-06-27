import {LayoutProps} from "@/types/LayoutProps";

const ProductCardGridLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"grid grid-cols-4 phone:grid-cols-1 gap-x-3 gap-y-6"}>
            {children}
        </div>
    )
}

export default ProductCardGridLayout;