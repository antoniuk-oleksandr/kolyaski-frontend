import {LayoutProps} from "@/types/LayoutProps";

const CheckoutBillDeliveryPriceLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex justify-between mt-3"}>
            {children}
        </div>
    )
}

export default CheckoutBillDeliveryPriceLayout;