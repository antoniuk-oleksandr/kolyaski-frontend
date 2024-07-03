import {LayoutProps} from "@/types/LayoutProps";

const ProductDescriptionLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"text-sm text-justify mt-9"}>
            {children}
        </div>
    )
}

export default ProductDescriptionLayout;