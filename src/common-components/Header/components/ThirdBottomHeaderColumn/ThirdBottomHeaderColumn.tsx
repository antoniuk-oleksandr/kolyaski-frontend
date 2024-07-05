import ThirdBottomHeaderColumnLayout from "./ThirdBottomHeaderColumnLayout";
import ThirdBottomHeaderColumnItem
    from "@/common-components/Header/components/ThirdBottomHeaderColumnItem/ThirdBottomHeaderColumnItem";
import {FaCartShopping, FaGift} from "react-icons/fa6";
import CartItemNumber from "@/common-components/Header/components/CartItemNumber/CartItemNumber";
import CartIconLayout from "@/common-components/Header/components/CartIconLayout";

const ThirdBottomHeaderColumn = () => {

    return (
        <ThirdBottomHeaderColumnLayout>
            <ThirdBottomHeaderColumnItem
                text={'Пакунок малюка'}
                icon={<FaGift/>}
                link={'/wishlist'}
            />
            <CartIconLayout>
                <ThirdBottomHeaderColumnItem
                    text={'Мій кошик'}
                    icon={<FaCartShopping/>}
                    link={'/cart'}
                />
                <CartItemNumber/>
            </CartIconLayout>
        </ThirdBottomHeaderColumnLayout>
    )
}

export default ThirdBottomHeaderColumn;