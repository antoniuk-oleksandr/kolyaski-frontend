import {LayoutProps} from "@/types/LayoutProps";
import {OrderStatusEnum} from "@/types/OrderStatusEnum";
import {getOrderStatusStyles} from "@/pages/admin/orders/helpers";

type OrderStatusElementLayoutProps = LayoutProps & {
    status: OrderStatusEnum,
}

const OrderStatusElementLayout = (props: OrderStatusElementLayoutProps) => {
    const {children, status} = props;
    const styles = getOrderStatusStyles(status);

    return (
        <div className={`rounded-md grid place-items-center w-fit h-fit px-4 bg-opacity-10 ${styles}`}>
            {children}
        </div>
    )
}

export default OrderStatusElementLayout;