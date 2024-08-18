import AdminElementLayout from "../components/AdminElementLayout";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {useAllOrders} from "@/pages/admin/use-effects/use-all-orders";
import AdminLoader from "@/pages/admin/components/AdminLoader";
import OrdersBlock from "@/pages/admin/orders/components/OrdersBlock/OrdersBlock";
import AdminSearchbar from "@/pages/admin/comments/components/CommentsSearchbar/AdminSearchbar";
import {ordersSearchSubmitAction} from "@/pages/admin/helpers";
import NoDataFound from "@/pages/admin/comments/components/NoDataFound";
import {useRouter} from "next/router";

const AdminPanelOrders = () => {
    const router = useRouter();


    const {token, ordersState} = useSelector((state: ReduxState) => state);
    const {page, value, sortOrder, sortBy} = ordersState;
    const dispatch = useDispatch();
    useAllOrders(token.tokenInfo, dispatch, router);

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
            {
                ordersState.orders.length === 0
                    ? <NoDataFound type={"orders"}/>
                    : <OrdersBlock/>
            }
        </AdminElementLayout>
    )

    return (
        <div>WTF???</div>
    )
}

export default AdminPanelOrders;