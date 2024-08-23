import ThirdBottomHeaderColumnLayout from "./ThirdBottomHeaderColumnLayout";
import ThirdBottomHeaderColumnItem
    from "@/common-components/Header/components/ThirdBottomHeaderColumnItem/ThirdBottomHeaderColumnItem";
import {FaCartShopping, FaGift} from "react-icons/fa6";
import CartItemNumber from "@/common-components/Header/components/CartItemNumber/CartItemNumber";
import CartIconLayout from "@/common-components/Header/components/CartIconLayout";
import CartHoverMenu from "@/common-components/Header/components/CartHoverMenu/CartHoverMenu";
import {useState} from "react";
import {useSelector} from "react-redux";
import {CartState} from "@/types/CartState";
import {useHeaderCartItems} from "@/common-components/Header/use-effects/use-header-cart-items";

const ThirdBottomHeaderColumn = () => {
    const [isHovered, setHovered] = useState(false);
    const {cart} = useSelector((state: any) => state) as { cart: CartState };
    const {cartItems} = useHeaderCartItems(cart);

    return (
        <ThirdBottomHeaderColumnLayout>
            <ThirdBottomHeaderColumnItem
                text={'Пакунок малюка'}
                icon={<FaGift/>}
                link={'/wishlist'}
            />
            <CartIconLayout setHovered={setHovered}>
                <ThirdBottomHeaderColumnItem
                    action={() => setHovered(false)}
                    text={'Мій кошик'}
                    icon={<FaCartShopping/>}
                    link={'/cart'}
                />
                <CartItemNumber/>
                <CartHoverMenu cartItems={cartItems} setIsShown={setHovered} isShown={isHovered}/>
            </CartIconLayout>
        </ThirdBottomHeaderColumnLayout>
    )
}

export default ThirdBottomHeaderColumn;