import {LayoutProps} from "@/types/LayoutProps";

const ProductsListElementImageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex justify-center items-center size-20 aspect-1x1 rounded-md bg-white"}>
            {children}
        </div>
    )
}

export default ProductsListElementImageLayout;