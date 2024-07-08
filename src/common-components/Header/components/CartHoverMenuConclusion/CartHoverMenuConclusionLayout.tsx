import {LayoutProps} from "@/types/LayoutProps";

const CartHoverMenuConclusionLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"border-t pt-3 text-base mt-3 flex flex-col gap-y-3"}>
            {children}
        </div>
    )
}

export default CartHoverMenuConclusionLayout;