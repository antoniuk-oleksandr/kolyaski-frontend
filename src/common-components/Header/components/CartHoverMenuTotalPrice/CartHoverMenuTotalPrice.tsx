import CartHoverMenuTotalPriceLayout from "./CartHoverMenuTotalPriceLayout";
import {NumberFormatter} from "@mantine/core";
import {CartState} from "@/types/CartState";
import {calcTotalCartPrice} from "@/common-components/Header/helpers";
import {ProductData} from "@/types/ProductData";
import {CartItem} from "@/types/CartItem";

type CartHoverMenuTotalPriceProps = {
    cartItems: CartItem[],
}

const CartHoverMenuTotalPrice = (props: CartHoverMenuTotalPriceProps) => {
    const {cartItems} = props;
    const totalPrice = calcTotalCartPrice(cartItems);

    return (
        <CartHoverMenuTotalPriceLayout>
            <span className={"w-16"}>Разом:</span>
            <NumberFormatter
                className={"text-neutral-400"}
                value={totalPrice}
                thousandSeparator={","}
                suffix={" грн."}
            />
        </CartHoverMenuTotalPriceLayout>
    )
}

export default CartHoverMenuTotalPrice;