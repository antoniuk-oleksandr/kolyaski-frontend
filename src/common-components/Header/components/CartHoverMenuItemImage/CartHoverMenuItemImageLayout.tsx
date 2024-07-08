import {LayoutProps} from "@/types/LayoutProps";

const CartHoverMenuItemImageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"bg-white rounded-md overflow-hidden grid place-items-center size-16 flex-shrink-0"}>
            {children}
        </div>
    )
}

export default CartHoverMenuItemImageLayout;