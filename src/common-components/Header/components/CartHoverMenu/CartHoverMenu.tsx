import CartHoverMenuLayout from "./CartHoverMenuLayout";
import {useSelector} from "react-redux";
import {CartState} from "@/types/CartState";
import CartHoverMenuItem from "@/common-components/Header/components/CartHoverMenuItem/CartHoverMenuItem";
import {Dispatch, Key, SetStateAction, useEffect} from "react";
import CartHoverMenuConclusion
    from "@/common-components/Header/components/CartHoverMenuConclusion/CartHoverMenuConclusion";
import {useHeaderCartItems} from "@/common-components/Header/use-effects/use-header-cart-items";
import {ProductData} from "@/types/ProductData";
import {CartItem} from "@/types/CartItem";

type CartHoverMenuProps = {
    isShown: boolean,
    setIsShown: Dispatch<SetStateAction<boolean>>,
    cartItems: CartItem[] | null,
}

const CartHoverMenu = (props: CartHoverMenuProps) => {
    const {cartItems} = props;

    if(!cartItems) return null;
    return (
        <CartHoverMenuLayout {...props}>
            {cartItems.length > 0 ? (
                <>
                    {cartItems.map((product, index: Key) => (
                        <CartHoverMenuItem {...props} {...product} key={index}/>
                    ))}
                    <CartHoverMenuConclusion {...props} cartItems={cartItems}/>
                </>
            ) : (
                <span>В кошику немає товарів</span>
            )}
        </CartHoverMenuLayout>
    )
}

export default CartHoverMenu;