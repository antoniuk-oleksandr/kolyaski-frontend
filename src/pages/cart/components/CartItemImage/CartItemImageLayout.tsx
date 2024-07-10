import {LayoutProps} from "@/types/LayoutProps";

const CartItemImageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"size-20 rounded-md overflow-hidden grid place-items-center phone:row-span-3"}>
            {children}
        </div>
    )
}

export default CartItemImageLayout;