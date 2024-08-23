import CartItemQuantitySelectorLayout from "./CartItemQuantitySelectorLayout";
import CartItemQuantityButton from "@/pages/cart/components/CartItemQuantityButton";
import {FaMinus, FaPlus} from "react-icons/fa6";
import {useDispatch} from "react-redux";
import {setCartProductQuantity} from "@/redux/cart-slice";
import {changeCartProductQuantityInLocalStorage} from "@/utils/local-storage-utils";
import {changeQuantity} from "@/pages/cart/helpers";

type CartItemQuantitySelectorProps = {
    quantity: number,
    id: number,
}

const CartItemQuantitySelector = (props: CartItemQuantitySelectorProps) => {
    const {quantity, id} = props;
    const dispatch = useDispatch();

    return (
        <CartItemQuantitySelectorLayout>
            <CartItemQuantityButton
                clickAction={() => changeQuantity(id, -1 + quantity, dispatch)}
                icon={<FaMinus/>}
            />
            <p className={"w-14 h-full rounded-md grid place-items-center ring-1 ring-neutral-200"}>{quantity}</p>
            <CartItemQuantityButton
                clickAction={() => changeQuantity(id, 1 + quantity, dispatch)}
                icon={<FaPlus/>}
            />
        </CartItemQuantitySelectorLayout>
    )
}

export default CartItemQuantitySelector;