import CartHoverMenuConclusionLayout from "./CartHoverMenuConclusionLayout";
import {CartState} from "@/types/CartState";
import CartHoverMenuTotalPrice
    from "@/common-components/Header/components/CartHoverMenuTotalPrice/CartHoverMenuTotalPrice";
import CartHoverMenuOrderConfirmationButton
    from "@/common-components/Header/components/CartHoverMenuOrderConfirmationButton";
import CartHoverMenuCartButton from "@/common-components/Header/components/CartHoverMenuCartButton";
import {Dispatch, SetStateAction} from "react";
import {ProductData} from "@/types/ProductData";
import {CartItem} from "@/types/CartItem";

type CartHoverMenuConclusionProps = {
    cartItems: CartItem[],
    setIsShown: Dispatch<SetStateAction<boolean>>,
}

const CartHoverMenuConclusion = (props: CartHoverMenuConclusionProps) => {
    return (
        <CartHoverMenuConclusionLayout>
            <CartHoverMenuTotalPrice {...props}/>
            <CartHoverMenuOrderConfirmationButton {...props}/>
            <CartHoverMenuCartButton {...props}/>
        </CartHoverMenuConclusionLayout>
    )
}

export default CartHoverMenuConclusion;