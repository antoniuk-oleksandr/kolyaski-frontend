import CheckoutBillGrandTotalLayout from "./CheckoutBillGrandTotalLayout";
import {NumberFormatter} from "@mantine/core";
import {calcTotalCartPrice} from "@/common-components/Header/helpers";
import {CartItem} from "@/types/CartItem";

type CheckoutBillGrandTotalProps = {
    products: CartItem[],
    deliveryPrice: number,
}

const CheckoutBillGrandTotal = (props: CheckoutBillGrandTotalProps) => {
    const {products, deliveryPrice} = props;
    const totalCartPrice = calcTotalCartPrice(products);

    return (
        <CheckoutBillGrandTotalLayout>
            <span>До сплати</span>
            <NumberFormatter
                className={"text-2xl font-semibold"}
                suffix={" грн."}
                thousandSeparator={","}
                // value={totalCartPrice + deliveryPrice}/>
                value={totalCartPrice}/>
        </CheckoutBillGrandTotalLayout>
    )
}

export default CheckoutBillGrandTotal;