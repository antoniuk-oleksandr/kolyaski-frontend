import {LayoutProps} from "@/types/LayoutProps";

const OrdersButtonListLayout = (props: LayoutProps) => {
    const {children} = props;

    return (
        <div className={"px-6 h-12 flex items-center justify-end bg-gray-200 rounded-t-md"}>
            {children}
        </div>
    )
}

export default OrdersButtonListLayout;