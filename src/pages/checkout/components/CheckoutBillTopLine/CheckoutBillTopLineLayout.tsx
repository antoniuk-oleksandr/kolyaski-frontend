import {LayoutProps} from "@/types/LayoutProps";

const CheckoutBillTopLineLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"flex justify-between"}>
            {children}
        </div>
    )
}

export default CheckoutBillTopLineLayout;