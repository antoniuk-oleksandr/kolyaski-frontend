import CheckoutBillTopLineLayout from "./CheckoutBillTopLineLayout";
import {NumberFormatter} from "@mantine/core";
import {calcTotalCartQuantity, getCartQuantityWordEnding} from "@/pages/checkout/helpers";
import {calcTotalCartPrice} from "@/common-components/Header/helpers";
import {CartItem} from "@/types/CartItem";

type CheckoutBillTopLineProps = {
    cartItems: CartItem[],
}

const CheckoutBillTopLine = (props: CheckoutBillTopLineProps) => {
    const {cartItems} = props;
    const totalCartQuantity = calcTotalCartQuantity(cartItems);
    const totalCartPrice = calcTotalCartPrice(cartItems);
    const wordEnding = getCartQuantityWordEnding(totalCartQuantity);

    return (
        <CheckoutBillTopLineLayout>
            <span>{totalCartQuantity} товар{wordEnding} на суму</span>
            <NumberFormatter
                thousandSeparator={","}
                value={totalCartPrice}
                suffix={" грн."}
            />
        </CheckoutBillTopLineLayout>
    )
}

export default CheckoutBillTopLine;