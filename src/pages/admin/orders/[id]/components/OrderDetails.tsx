import {useSelector} from "react-redux";
import {ReduxState} from "@/types/ReduxState";
import {OrderType} from "@/types/OrderType";
import {calcTotalCartPrice} from "@/common-components/Header/helpers";
import {NumberFormatter} from "@mantine/core";
import OrderComponentLayout from "@/pages/admin/orders/[id]/components/OrderComponentLayout";

type OrderDetailsProps = {
    orderById: OrderType,
}

const OrderDetails = (props: OrderDetailsProps) => {
    const {orderById} = props;
    const {date} = orderById;
    const {products} = useSelector((state: ReduxState) => state.cart);
    const totalPrice = calcTotalCartPrice(products);

    return (
        <OrderComponentLayout>
            <h2 className="text-lg font-semibold">Деталі замовлення</h2>
            <div className={"flex gap-x-1 items-center pt-1.5"}>
                <p>Загальна ціна:</p>
                <NumberFormatter value={totalPrice} thousandSeparator={","} suffix={" грн."}/>
            </div>
            <p>Дата замовлення: {date}</p>
        </OrderComponentLayout>
    )
}

export default OrderDetails;