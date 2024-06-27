import {LayoutProps} from "@/types/LayoutProps";

const ProductsTopLineLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full flex justify-end gap-x-5 items-center mb-12"}>
            {children}
        </div>
    )
}

export default ProductsTopLineLayout;