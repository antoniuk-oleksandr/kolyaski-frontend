import CartItemElementLayout from "./CartItemElementLayout";
import {CartItem} from "@/types/CartItem";
import CartItemImage from "@/pages/cart/components/CartItemImage/CartItemImage";
import CartItemQuantitySelector from "@/pages/cart/components/CartItemQuantitySelector/CartItemQuantitySelector";
import {NumberFormatter} from "@mantine/core";
import {handleCartItemRemoveButtonClick} from "@/common-components/Header/handlers";
import {useDispatch} from "react-redux";
import {FaTrash} from "react-icons/fa6";
import {useRouter} from "next/router";
import CartItemName from "@/pages/cart/components/CartItemName";

type CartItemElementProps = CartItem & {
    bottomBorderShown: boolean,
    gridCols?: string,
    gridColsPhone?: string,
}

const CartItemElement = (props: CartItemElementProps) => {
    const {quantity, product} = props;
    const {price, images, id} = product;
    const dispatch = useDispatch();

    return (
        <CartItemElementLayout {...props}>
            <CartItemImage id={id} image={images[0]}/>
            <CartItemName {...product}/>
            <CartItemQuantitySelector id={id} quantity={quantity}/>
            <NumberFormatter
                thousandSeparator={","}
                suffix={" грн."}
                className={"text-center font-medium phone:col-start-2 phone:row-start-3 phone:text-start"}
                value={price}
            />
            <FaTrash
                onClick={() => handleCartItemRemoveButtonClick(dispatch, id)}
                className={"text-lg m-3 cursor-pointer hover:text-neutral-400 duration-200 outline-none ease-out active:scale-95 phone:col-start-3 phone:row-start-1"}
            />
        </CartItemElementLayout>
    )
}

export default CartItemElement;