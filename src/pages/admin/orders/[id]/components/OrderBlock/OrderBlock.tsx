import OrderBlockLayout from "./OrderBlockLayout";
import OrderDetails from "@/pages/admin/orders/[id]/components/OrderDetails";
import OrderClientInformation from "@/pages/admin/orders/[id]/components/OrderClientInformation/OrderClientInformation";
import OrderDeliveryInformation from "@/pages/admin/orders/[id]/components/OrderDeliveryInformation";
import {City} from "@/types/City";
import {OrderType} from "@/types/OrderType";
import OrderProductsInformation from "@/pages/admin/orders/[id]/components/OrderProductsInformation";
import OrdersStatusSelector from "@/pages/admin/orders/[id]/components/OrdersStatusSelector";
import OrderButtons from "@/pages/admin/orders/[id]/components/OrderButtons";
import {MutableRefObject, useState} from "react";

type OrderBlockProps = {
    commonCities: City[],
    orderById: OrderType,
    initialOrderData: MutableRefObject<OrderType | null>,
}

const OrderBlock = (props: OrderBlockProps) => {
    const {orderById, initialOrderData} = props;
    const [sending, setSending] = useState(false);

    return (
        <OrderBlockLayout setSending={setSending} {...props}>
            <h1 className="text-2xl font-bold mb-3">Редагувати замовлення №{orderById.id}</h1>
            <OrderDetails {...props}/>
            <OrderClientInformation/>
            <OrderDeliveryInformation {...props}/>
            <OrderProductsInformation/>
            <OrdersStatusSelector {...props}/>
            <OrderButtons initialOrderDataRef={initialOrderData} sending={sending}/>
        </OrderBlockLayout>
    );
};

export default OrderBlock;
