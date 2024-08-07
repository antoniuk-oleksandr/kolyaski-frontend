import AdminSearchbar from "@/pages/admin/comments/components/CommentsSearchbar/AdminSearchbar";
import {ordersSearchSubmitAction} from "@/pages/admin/helpers";
import AdminElementLayout from "@/pages/admin/components/AdminElementLayout";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import AdminLoader from "@/pages/admin/components/AdminLoader";
import {useOrderById} from "@/pages/admin/use-effects/use-orders-by-id";
import OrderBlock from "@/pages/admin/orders/[id]/components/OrderBlock/OrderBlock";
import {useCommonCities} from "@/pages/checkout/use-effects/use-common-cities";
import {useRef} from "react";
import AddOrderProductModal from "@/pages/admin/orders/[id]/components/AddOrderProductModal/AddOrderProductModal";
import {AddOrderProductModalSignalType} from "@/types/AddOrderProductModalSignalType";

const OrderByIdPage = () => {
    const {token, ordersState} = useSelector((state: ReduxState) => state);
    const {page, value, orderById, sortBy, sortOrder} = ordersState;
    const dispatch = useDispatch();
    const {initialOrderData} = useOrderById(token.tokenInfo, dispatch);
    const {commonCities} = useCommonCities();
    const prevModalValue = useRef<AddOrderProductModalSignalType>({toggle: 0, close: 0});

    if (!page || value === null || !commonCities || !orderById || !sortOrder || !sortBy) return <AdminLoader/>
    return (
        <>
            <AdminElementLayout>
                <AdminSearchbar
                    value={value}
                    page={page}
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    submitAction={ordersSearchSubmitAction}
                />
                <OrderBlock
                    initialOrderData={initialOrderData}
                    orderById={orderById}
                    commonCities={commonCities}
                />
            </AdminElementLayout>
            <AddOrderProductModal prevModalValue={prevModalValue}/>
        </>
    )
}

export default OrderByIdPage;