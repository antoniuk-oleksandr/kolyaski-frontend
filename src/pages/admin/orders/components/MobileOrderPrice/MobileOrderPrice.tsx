import MobileOrderPriceLayout from "./MobileOrderPriceLayout";
import {NumberFormatter} from "@mantine/core";
import OrderStatusElement from "@/pages/admin/orders/components/OrderStatusElement/OrderStatusElement";
import {OrderStatusEnum} from "@/types/OrderStatusEnum";

type MobileOrderPriceProps = {
    totalPrice: number,
    status: OrderStatusEnum,
}

const MobileOrderPrice = (props: MobileOrderPriceProps) => {
    const {totalPrice, status} = props;

    return (
        <MobileOrderPriceLayout>
                <div className={"flex flex-col"}>
                    <span>Загальна ціна</span>
                    <NumberFormatter
                        className={"text-base font-medium"}
                        thousandSeparator={","}
                        suffix={" грн"}
                        value={totalPrice}
                    />
                </div>
                <OrderStatusElement status={status}/>
        </MobileOrderPriceLayout>
    )
}

export default MobileOrderPrice;