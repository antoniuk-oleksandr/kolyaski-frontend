import {LayoutProps} from "@/types/LayoutProps";

const OrdersBlockLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"rounded-md"}>
            {children}
        </div>
    )
}

export default OrdersBlockLayout;