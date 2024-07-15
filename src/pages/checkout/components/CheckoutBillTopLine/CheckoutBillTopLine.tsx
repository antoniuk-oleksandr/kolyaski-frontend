import CheckoutBillTopLineLayout from "./CheckoutBillTopLineLayout";
import {NumberFormatter} from "@mantine/core";
import {calcTotalCartQuantity, getCartQuantityWordEnding} from "@/pages/checkout/helpers";
import {calcTotalCartPrice} from "@/common-components/Header/helpers";
import {CartItem} from "@/types/CartItem";

type CheckoutBillTopLineProps = {
    products: CartItem[],
}

const CheckoutBillTopLine = (props: CheckoutBillTopLineProps) => {
    const {products} = props;
    const totalCartQuantity = calcTotalCartQuantity(products);
    const totalCartPrice = calcTotalCartPrice(products);
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