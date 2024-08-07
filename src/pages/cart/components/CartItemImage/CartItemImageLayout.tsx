import {LayoutProps} from "@/types/LayoutProps";

const CartItemImageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"size-20 rounded-md flex items-center justify-center aspect-1x1 phone:row-span-3"}>
            {children}
        </div>
    )
}

export default CartItemImageLayout;