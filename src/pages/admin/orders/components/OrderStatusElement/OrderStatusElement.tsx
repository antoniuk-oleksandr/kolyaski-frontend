import OrderStatusElementLayout from "./OrderStatusElementLayout";
import {OrderStatusEnum} from "@/types/OrderStatusEnum";

type StatusElementProps = {
    status: OrderStatusEnum,
}

const OrderStatusElement = (props: StatusElementProps) => {
    const {status} = props;

    return (
        <OrderStatusElementLayout {...props}>
            <span>{status}</span>
        </OrderStatusElementLayout>
    )
}

export default OrderStatusElement;