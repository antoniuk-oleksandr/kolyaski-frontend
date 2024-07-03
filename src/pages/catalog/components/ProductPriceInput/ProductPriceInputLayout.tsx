import {LayoutProps} from "@/types/LayoutProps";

const ProductPriceInputLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex w-66 gap-2 text-sm items-center mb-3 h-8"}>
            {children}
        </div>
    )
}

export default ProductPriceInputLayout;