import {LayoutProps} from "@/types/LayoutProps";

const CheckoutCartLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex flex-col gap-y-3 mb-6"}>
            {children}
        </div>
    )
}

export default CheckoutCartLayout;