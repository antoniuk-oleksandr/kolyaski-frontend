import {LayoutProps} from "@/types/LayoutProps";

const CheckoutCartContentLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"bg-white rounded-md w-full px-4 py-3"}>
            {children}
        </div>
    )
}

export default CheckoutCartContentLayout;