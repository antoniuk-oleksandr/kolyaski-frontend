import CartItemNumberLayout from "./CartItemNumberLayout";
import {useSelector} from "react-redux";

const CartItemNumber = () => {
    const {cart} = useSelector((state: any) => state);

    return (
        <CartItemNumberLayout>
            <span >{cart.items.length}</span>
        </CartItemNumberLayout>
    )
}

export default CartItemNumber;