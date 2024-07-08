import {LayoutProps} from "@/types/LayoutProps";

const CartHoverMenuItemLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex gap-x-3 text-sm items-center"}>
            {children}
        </div>
    )
}

export default CartHoverMenuItemLayout;