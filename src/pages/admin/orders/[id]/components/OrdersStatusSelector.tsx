import OrderComponentLayout from "@/pages/admin/orders/[id]/components/OrderComponentLayout";
import {OrderType} from "@/types/OrderType";
import {Select} from "@mantine/core";
import {OrderStatusEnum} from "@/types/OrderStatusEnum";
import {useFormContext} from "react-hook-form";

type OrdersStatusSelectorProps = {
    orderById: OrderType,
}

const OrdersStatusSelector = (props: OrdersStatusSelectorProps) => {
    const {orderById} = props;
    const {setValue} = useFormContext();

    return (
        <OrderComponentLayout>
            <h2 className="text-lg font-semibold">Статус замовлення</h2>
            <Select
                onChange={(value) => setValue("status", value)}
                defaultValue={orderById.status}
                placeholder="Pick value"
                data={Object.values(OrderStatusEnum)}
            />
        </OrderComponentLayout>
    )
}

export default OrdersStatusSelector;