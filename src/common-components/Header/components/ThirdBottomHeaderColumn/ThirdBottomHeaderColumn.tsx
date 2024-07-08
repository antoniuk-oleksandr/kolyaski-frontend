import ThirdBottomHeaderColumnLayout from "./ThirdBottomHeaderColumnLayout";
import ThirdBottomHeaderColumnItem
    from "@/common-components/Header/components/ThirdBottomHeaderColumnItem/ThirdBottomHeaderColumnItem";
import {FaCartShopping, FaGift} from "react-icons/fa6";
import CartItemNumber from "@/common-components/Header/components/CartItemNumber/CartItemNumber";
import CartIconLayout from "@/common-components/Header/components/CartIconLayout";
import CartHoverMenu from "@/common-components/Header/components/CartHoverMenu/CartHoverMenu";
import {useState} from "react";

const ThirdBottomHeaderColumn = () => {
    const [isHovered, setHovered] = useState(false);

    return (
        <ThirdBottomHeaderColumnLayout>
            <ThirdBottomHeaderColumnItem
                text={'Пакунок малюка'}
                icon={<FaGift/>}
                link={'/wishlist'}
            />
            <CartIconLayout setHovered={setHovered}>
                <ThirdBottomHeaderColumnItem
                    text={'Мій кошик'}
                    icon={<FaCartShopping/>}
                    link={'/cart'}
                />
                <CartItemNumber/>
                <CartHoverMenu setIsShown={setHovered} isShown={isHovered}/>
            </CartIconLayout>
        </ThirdBottomHeaderColumnLayout>
    )
}

export default ThirdBottomHeaderColumn;