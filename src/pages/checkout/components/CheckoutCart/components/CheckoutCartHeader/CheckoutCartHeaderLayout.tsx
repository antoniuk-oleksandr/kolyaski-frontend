import {LayoutProps} from "@/types/LayoutProps";

const CheckoutCartHeaderLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex justify-between items-center"}>
            {children}
        </div>
    )
}

export default CheckoutCartHeaderLayout;