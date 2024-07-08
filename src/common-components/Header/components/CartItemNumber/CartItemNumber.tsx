import CartItemNumberLayout from "./CartItemNumberLayout";
import {useSelector} from "react-redux";
import {CartState} from "@/types/CartState";

const CartItemNumber = () => {
    const {cart} = useSelector((state: any) => state) as {cart: CartState};

    return (
        <CartItemNumberLayout>
            <span >{cart.products.length}</span>
        </CartItemNumberLayout>
    )
}

export default CartItemNumber;