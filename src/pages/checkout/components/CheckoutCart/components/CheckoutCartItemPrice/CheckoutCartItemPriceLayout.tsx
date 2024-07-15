import {LayoutProps} from "@/types/LayoutProps";

type CheckoutCartItemPriceLayoutProps = LayoutProps;

const CheckoutCartItemPriceLayout = (props: CheckoutCartItemPriceLayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex items-center gap-x-1 justify-center phone:row-start-2 phone:col-start-2 phone:justify-start"}>
            {children}
        </div>
    )
}

export default CheckoutCartItemPriceLayout;