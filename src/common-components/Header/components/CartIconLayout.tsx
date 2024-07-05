import {LayoutProps} from "@/types/LayoutProps";

const CartIconLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"relative"}>
            {children}
        </div>
    )
}

export default CartIconLayout;