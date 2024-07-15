import CheckoutBillDeliveryPriceLayout from "./CheckoutBillDeliveryPriceLayout";
import {NumberFormatter} from "@mantine/core";

type CheckoutBillDeliveryPrice = {
    deliveryPrice: number,
}

const CheckoutBillDeliveryPrice = (props: CheckoutBillDeliveryPrice) => {
    const {deliveryPrice} = props

    return (
        <CheckoutBillDeliveryPriceLayout>
            <span>Вартість доставки</span>
            <NumberFormatter
                thousandSeparator={","}
                value={deliveryPrice}
                suffix={" грн."}
            />
        </CheckoutBillDeliveryPriceLayout>
    )
}

export default CheckoutBillDeliveryPrice;