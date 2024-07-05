import {LayoutProps} from "@/types/LayoutProps";

const CartItemNumberLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div
            className={"rounded-full -mt-2 mr-2 phone:-mr-2 text-sm size-5 text-white absolute bg-secondary top-0 right-0 grid place-items-center"}
        >
            {children}
        </div>
    )
}

export default CartItemNumberLayout;