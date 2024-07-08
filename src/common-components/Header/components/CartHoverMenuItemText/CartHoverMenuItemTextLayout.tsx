import {LayoutProps} from "@/types/LayoutProps";

const CartHoverMenuItemTextLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col gap-y-1"}>
            {children}
        </div>
    )
}

export default CartHoverMenuItemTextLayout;