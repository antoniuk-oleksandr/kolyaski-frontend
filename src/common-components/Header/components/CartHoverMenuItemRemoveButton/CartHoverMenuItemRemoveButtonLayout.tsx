import {LayoutProps} from "@/types/LayoutProps";

const CartHoverMenuItemRemoveButtonLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"h-16 flex flex-1 items-start"}>
            {children}
        </div>
    )
}

export default CartHoverMenuItemRemoveButtonLayout;