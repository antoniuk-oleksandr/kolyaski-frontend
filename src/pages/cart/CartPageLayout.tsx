import {LayoutProps} from "@/types/LayoutProps";

const CartPageLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full flex"}>
            {children}
        </div>
    )
}

export default CartPageLayout;