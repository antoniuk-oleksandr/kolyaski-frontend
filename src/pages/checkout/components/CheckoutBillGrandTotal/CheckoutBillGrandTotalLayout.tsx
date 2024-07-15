import {LayoutProps} from "@/types/LayoutProps";

const CheckoutBillGrandTotalLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"py-4 mt-3 border-y border-neutral-200 flex justify-between items-center"}>
            {children}
        </div>
    )
}

export default CheckoutBillGrandTotalLayout;