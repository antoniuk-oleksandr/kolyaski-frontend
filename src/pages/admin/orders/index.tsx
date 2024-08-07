import AdminElementLayout from "../components/AdminElementLayout";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {useAllOrders} from "@/pages/admin/use-effects/use-all-orders";
import AdminLoader from "@/pages/admin/components/AdminLoader";
import OrdersBlock from "@/pages/admin/orders/components/OrdersBlock/OrdersBlock";
import AdminSearchbar from "@/pages/admin/comments/components/CommentsSearchbar/AdminSearchbar";
import {ordersSearchSubmitAction} from "@/pages/admin/helpers";

const AdminPanelOrders = () => {
    const {token, ordersState} = useSelector((state: ReduxState) => state);
    const {page, value, sortOrder, sortBy} = ordersState;
    const dispatch = useDispatch();
    useAllOrders(token.tokenInfo, dispatch);

    if (!ordersState.orders || !page || value === null || !sortOrder || !sortBy) return <AdminLoader/>
    return (
        <AdminElementLayout>
            <AdminSearchbar
                value={value}
                page={page}
                sortBy={sortBy}
                sortOrder={sortOrder}
                submitAction={ordersSearchSubmitAction}
            />
            <OrdersBlock/>
        </AdminElementLayout>
    )
}

export default AdminPanelOrders;