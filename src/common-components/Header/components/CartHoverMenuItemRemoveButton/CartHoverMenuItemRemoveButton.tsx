import CartHoverMenuItemRemoveButtonLayout from "./CartHoverMenuItemRemoveButtonLayout";
import {IoClose} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {handleCartItemRemoveButtonClick} from "@/common-components/Header/handlers";

type CartHoverMenuItemRemoveButtonProps = {
    id: number,
}

const CartHoverMenuItemRemoveButton = (props: CartHoverMenuItemRemoveButtonProps) => {
    const {id} = props;
    const dispatch = useDispatch();

    return (
        <CartHoverMenuItemRemoveButtonLayout>
            <button
                onClick={() => handleCartItemRemoveButtonClick(dispatch, id)}
                className={"hover:text-secondary duration-200 ease-out outline-none active:scale-95 text-base"}
            >
                <IoClose/>
            </button>
        </CartHoverMenuItemRemoveButtonLayout>
    )
}

export default CartHoverMenuItemRemoveButton;