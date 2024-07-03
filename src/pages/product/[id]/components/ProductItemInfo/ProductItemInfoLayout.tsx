import {LayoutProps} from "@/types/LayoutProps";

const ProductItemInfoLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex-1 p-3 phone:p-0"}>
            {children}
        </div>
    )
}

export default ProductItemInfoLayout;