import CartHoverMenuLayout from "./CartHoverMenuLayout";
import {useSelector} from "react-redux";
import {CartState} from "@/types/CartState";
import CartHoverMenuItem from "@/common-components/Header/components/CartHoverMenuItem/CartHoverMenuItem";
import {Dispatch, Key, SetStateAction} from "react";
import CartHoverMenuConclusion
    from "@/common-components/Header/components/CartHoverMenuConclusion/CartHoverMenuConclusion";

type CartHoverMenuProps = {
    isShown: boolean,
    setIsShown: Dispatch<SetStateAction<boolean>>,
}

const CartHoverMenu = (props: CartHoverMenuProps) => {
    const {cart} = useSelector((state: any) => state) as { cart: CartState };

    return (
        <CartHoverMenuLayout {...props}>
            {cart.products.length > 0 ? (
                <>
                    {cart.products.map((product, index: Key) => (
                        <CartHoverMenuItem {...props} {...product} key={index}/>
                    ))}
                    <CartHoverMenuConclusion {...props} cart={cart}/>
                </>
            ) : (
                <span>В кошику немає товарів</span>
            )}
        </CartHoverMenuLayout>
    )
}

export default CartHoverMenu;