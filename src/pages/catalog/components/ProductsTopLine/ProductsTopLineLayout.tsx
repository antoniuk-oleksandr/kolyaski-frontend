import {LayoutProps} from "@/types/LayoutProps";

const ProductsTopLineLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full flex justify-end gap-x-5 phone:gap-x-0 phone:justify-between items-center mb-12"}>
            {children}
        </div>
    )
}

export default ProductsTopLineLayout;