import CheckoutCartLayout from "./CheckoutCartLayout";
import {CartState} from "@/types/CartState";
import CheckoutCartHeader
    from "@/pages/checkout/components/CheckoutCart/components/CheckoutCartHeader/CheckoutCartHeader";
import CheckoutCartContent
    from "@/pages/checkout/components/CheckoutCart/components/CheckoutCartContent/CheckoutCartContent";

type CheckoutCartState = {
    cart: CartState,
}

const CheckoutCart = (props: CheckoutCartState) => {
    const {cart} = props;
    const {products} = cart;

    return (
        <CheckoutCartLayout>
            <CheckoutCartHeader products={products}/>
            <CheckoutCartContent products={products}/>
        </CheckoutCartLayout>
    )
}

export default CheckoutCart;