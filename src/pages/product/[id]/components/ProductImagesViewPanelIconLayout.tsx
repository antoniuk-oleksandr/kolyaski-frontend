import {LayoutProps} from "@/types/LayoutProps";

type ProductImagesViewPanelIconLayoutProps = LayoutProps & {
    action: () => void,
}

const ProductImagesViewPanelIconLayout = (props: ProductImagesViewPanelIconLayoutProps) => {
    const {children, action} = props;

    return (
        <div
            onClick={action}
            className={"size-11 grid place-items-center cursor-pointer hover:text-primary duration-200 ease-out outline-none active:scale-95"}>
            {children}
        </div>
    )
}

export default ProductImagesViewPanelIconLayout;