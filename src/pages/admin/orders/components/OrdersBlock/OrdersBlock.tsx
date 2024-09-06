import {useSelector} from "react-redux";
import OrdersBlockLayout from "./OrdersBlockLayout";
import {ReduxState} from "@/types/ReduxState";
import OrdersButtonList from "@/pages/admin/orders/components/OrdersButtonList/OrdersButtonList";
import OrdersTable from "@/pages/admin/orders/components/OrdersTable/OrdersTable";

const OrdersBlock = () => {
    const {orders} = useSelector((state: ReduxState) => state.ordersState);

    if (!orders) return null;
    return (
        <OrdersBlockLayout>
            <OrdersButtonList/>
            <OrdersTable orders={orders}/>
        </OrdersBlockLayout>
    )
}

export default OrdersBlock;
