import {LayoutProps} from "@/types/LayoutProps";

const CartItemQuantitySelectorLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex justify-center phone:justify-start phone:col-start-2 phone:row-start-2"}>
            <div className={"flex gap-x-3 items-center"}>
                {children}
            </div>
        </div>
    )
}

export default CartItemQuantitySelectorLayout;