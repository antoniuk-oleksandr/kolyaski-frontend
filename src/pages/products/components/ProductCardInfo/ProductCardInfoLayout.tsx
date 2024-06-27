import {LayoutProps} from "@/types/LayoutProps";

const ProductCardInfoLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
            <div className="p-3">
            {children}
        </div>
    )
}

export default ProductCardInfoLayout;