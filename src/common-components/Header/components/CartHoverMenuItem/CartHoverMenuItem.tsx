import CartHoverMenuItemLayout from "./CartHoverMenuItemLayout";
import {CartItem} from "@/types/CartItem";
import CartHoverMenuItemText from "@/common-components/Header/components/CartHoverMenuItemText/CartHoverMenuItemText";
import CartHoverMenuItemImage
    from "@/common-components/Header/components/CartHoverMenuItemImage/CartHoverMenuItemImage";
import {Dispatch, SetStateAction} from "react";
import CartHoverMenuItemRemoveButton
    from "@/common-components/Header/components/CartHoverMenuItemRemoveButton/CartHoverMenuItemRemoveButton";

type CartHoverMenuItemProps = CartItem & {
    setIsShown: Dispatch<SetStateAction<boolean>>,
};

const CartHoverMenuItem = (props: CartHoverMenuItemProps) => {
    const {quantity, product} = props;
    const {images, id} = product;

    return (
        <CartHoverMenuItemLayout>
            <CartHoverMenuItemImage image={images[0]}/>
            <CartHoverMenuItemText {...props} {...product} quantity={quantity}/>
            <CartHoverMenuItemRemoveButton id={id}/>
        </CartHoverMenuItemLayout>
    )
}

export default CartHoverMenuItem;