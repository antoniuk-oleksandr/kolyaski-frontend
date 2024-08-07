import {LayoutProps} from "@/types/LayoutProps";

const ProductsListElementLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div>
            {children}
        </div>
    )
}

export default ProductsListElementLayout;