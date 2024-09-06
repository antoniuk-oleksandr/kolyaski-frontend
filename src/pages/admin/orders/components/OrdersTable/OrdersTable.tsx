import OrdersTableLayout from "./OrdersTableLayout";
import OrdersTableHead from "@/pages/admin/orders/components/OrdersTableHead";
import OrdersTableBody from "@/pages/admin/orders/components/OrdersTableBody";
import {OrderType} from "@/types/OrderType";
import {useViewportSize} from "@mantine/hooks";
import MobileOrdersList from "@/pages/admin/orders/components/MobileOrdersList/MobileOrdersList";
import { useRouter } from "next/router";

type OrderTypeProps = {
    orders: OrderType[],
}

const OrdersTable = (props: OrderTypeProps) => {
    const {orders} = props;
    const tableCellStyles = "text-start border-y-[0.5px] border-neutral-200 h-10 flex justify-between px-2 items-center";
    const {width} = useViewportSize();
    const isMobile = width < 960;

    if(width === 0) return null;
    return (
        <OrdersTableLayout>
            <OrdersTableHead isMobile={isMobile} tableCellStyles={tableCellStyles}/>
            {isMobile
                ? <MobileOrdersList orders={orders}/>
                : <OrdersTableBody tableCellStyles={tableCellStyles} orders={orders}/>
            }
        </OrdersTableLayout>
    )
}

export default OrdersTable;
