import MobileOrdersListLayout from "./MobileOrdersListLayout";
import {OrderType} from "@/types/OrderType";
import MobileOrder from "@/pages/admin/orders/components/MobileOrder/MobileOrder";

type MobileOrdersProps = {
    orders: OrderType[],
}

const MobileOrdersList = (props: MobileOrdersProps) => {
    return (
        <MobileOrdersListLayout>
            {props.orders.map((order, index) => (
                <MobileOrder key={index} order={order}/>
            ))}
        </MobileOrdersListLayout>
    )
}

export default MobileOrdersList;