import {LayoutProps} from "@/types/LayoutProps";

const CheckoutCartEditButtonLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full text-end"}>
            {children}
        </div>
    )
}

export default CheckoutCartEditButtonLayout;