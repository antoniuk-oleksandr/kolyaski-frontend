import {LayoutProps} from "@/types/LayoutProps";

const OrdersTableLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"w-full phone:border-0 border border-neutral-200 rounded-b-md text-sm"}>
            {children}
        </div>
    )
}

export default OrdersTableLayout;