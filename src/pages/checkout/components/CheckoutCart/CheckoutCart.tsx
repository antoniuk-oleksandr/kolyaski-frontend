import CheckoutCartLayout from "./CheckoutCartLayout";
import {CartState} from "@/types/CartState";
import CheckoutCartHeader
    from "@/pages/checkout/components/CheckoutCart/components/CheckoutCartHeader/CheckoutCartHeader";
import CheckoutCartContent
    from "@/pages/checkout/components/CheckoutCart/components/CheckoutCartContent/CheckoutCartContent";
import {useHeaderCartItems} from "@/common-components/Header/use-effects/use-header-cart-items";
import {CartItem} from "@/types/CartItem";

type CheckoutCartState = {
    cartItems: CartItem[],
}

const CheckoutCart = (props: CheckoutCartState) => {
    const {cartItems} = props;

    return (
        <CheckoutCartLayout>
            <CheckoutCartHeader products={cartItems}/>
            <CheckoutCartContent products={cartItems}/>
        </CheckoutCartLayout>
    )
}

export default CheckoutCart;