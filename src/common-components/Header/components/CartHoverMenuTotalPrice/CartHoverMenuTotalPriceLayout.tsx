import {LayoutProps} from "@/types/LayoutProps";

const CartHoverMenuTotalPriceLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-3 font-medium text-base"}>
            {children}
        </div>
    )
}

export default CartHoverMenuTotalPriceLayout;