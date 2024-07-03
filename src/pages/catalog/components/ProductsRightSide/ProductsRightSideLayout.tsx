import {LayoutProps} from "@/types/LayoutProps";

const ProductsRightSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"p-3 phone:px-0 flex-1"}>
            {children}
        </div>
    )
}

export default ProductsRightSideLayout;