import {LayoutProps} from "@/types/LayoutProps";

const ProductsLeftSideLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    )
}

export default ProductsLeftSideLayout;