import {LayoutProps} from "@/types/LayoutProps";

const ProductShownBlockLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"grid place-items-center border-r px-5 h-fit py-0.5"}>
            {children}
        </div>
    )
}

export default ProductShownBlockLayout;