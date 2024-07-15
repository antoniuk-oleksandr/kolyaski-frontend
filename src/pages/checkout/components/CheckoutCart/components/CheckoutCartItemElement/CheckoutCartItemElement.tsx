import CheckoutCartItemElementLayout from "./CheckoutCartItemElementLayout";
import {CartItem} from "@/types/CartItem";
import CartItemImage from "@/pages/cart/components/CartItemImage/CartItemImage";
import CartItemName from "@/pages/cart/components/CartItemName";
import CheckoutCartItemPrice
    from "@/pages/checkout/components/CheckoutCart/components/CheckoutCartItemPrice/CheckoutCartItemPrice";
import {NumberFormatter} from "@mantine/core";

type CartItemElementProps = CartItem & {
    bottomBorderShown: boolean,
}

const CheckoutCartItemElement = (props: CartItemElementProps) => {
    const {quantity, product} = props;
    const {price, images, id} = product;

    return (
        <CheckoutCartItemElementLayout {...props}>
            <CartItemImage id={id} image={images[0]}/>
            <CartItemName colSpan={'phone:col-span-2'} {...product}/>
            <CheckoutCartItemPrice price={price} quantity={quantity}/>
            <NumberFormatter
                suffix={" грн."}
                thousandSeparator={","}
                className={"text-end font-semibold phone:col-start-3 phone:row-start-2"}
                value={price * quantity}/>
        </CheckoutCartItemElementLayout>
    )
}

export default CheckoutCartItemElement;