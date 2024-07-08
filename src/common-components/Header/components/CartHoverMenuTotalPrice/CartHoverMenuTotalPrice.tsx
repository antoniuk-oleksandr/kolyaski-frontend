import CartHoverMenuTotalPriceLayout from "./CartHoverMenuTotalPriceLayout";
import {NumberFormatter} from "@mantine/core";
import {CartState} from "@/types/CartState";
import {calcTotalCartPrice} from "@/common-components/Header/helpers";

type CartHoverMenuTotalPriceProps = {
    cart: CartState,
}

const CartHoverMenuTotalPrice = (props: CartHoverMenuTotalPriceProps) => {
    const {cart} = props;
    const totalPrice = calcTotalCartPrice(cart.products);

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