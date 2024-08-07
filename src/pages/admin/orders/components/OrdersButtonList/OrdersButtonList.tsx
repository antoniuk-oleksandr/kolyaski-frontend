import OrdersButtonListLayout from "./OrdersButtonListLayout";
import AdminPageChangeElement
    from "@/pages/admin/components/AdminPageChangeElement/AdminPageChangeElement";
import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";

const OrdersButtonList = () => {
    const ordersState = useSelector((state: ReduxState) => state.ordersState);

    return (
        <OrdersButtonListLayout>
            <AdminPageChangeElement state={ordersState}/>
        </OrdersButtonListLayout>
    )
}

export default OrdersButtonList;