import ThirdBottomHeaderColumnLayout from "./ThirdBottomHeaderColumnLayout";
import ThirdBottomHeaderColumnItem
    from "@/common-components/Header/components/ThirdBottomHeaderColumnItem/ThirdBottomHeaderColumnItem";
import {FaCartShopping, FaGift} from "react-icons/fa6";

const ThirdBottomHeaderColumn = () => { 
    return (
        <ThirdBottomHeaderColumnLayout>
            <ThirdBottomHeaderColumnItem
                text={'Пакунок малюка'}
                icon={<FaGift />}
                link={'/wishlist'}
            />
            <ThirdBottomHeaderColumnItem
                text={'Мій кошик'}
                icon={<FaCartShopping />}
                link={'/cart'}
            />
        </ThirdBottomHeaderColumnLayout>
    )
}

export default ThirdBottomHeaderColumn;