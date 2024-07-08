import {FaCartShopping} from "react-icons/fa6";
import {useRouter} from "next/router";
import {Dispatch, SetStateAction} from "react";

type CartHoverMenuOrderConfirmationButtonProps = {
    setIsShown: Dispatch<SetStateAction<boolean>>,
}

const CartHoverMenuOrderConfirmationButton = (props: CartHoverMenuOrderConfirmationButtonProps) => {
    const {setIsShown} = props;
    const router = useRouter();

    return (
        <button
            onClick={() => {
                setIsShown(false);
                router.push('/checkout');
            }}
            className={"px-4 font-medium flex justify-center items-center gap-x-3 rounded-md py-3 bg-primary outline-none active:scale-95 text-white hover:bg-transparent hover:ring-1 hover:ring-primary duration-200 ease-out hover:text-primary"}
        >
            <FaCartShopping/>
            Оформити замовлення
        </button>
    )
}

export default CartHoverMenuOrderConfirmationButton;