import {Dispatch, FC, SetStateAction} from "react";
import {useRouter} from "next/router";
import {FaCartShopping, FaEye} from "react-icons/fa6";

type CartHoverMenuCartButtonProps = {
    setIsShown: Dispatch<SetStateAction<boolean>>,
}

const CartHoverMenuCartButton = (props: CartHoverMenuCartButtonProps) => {
    const {setIsShown} = props;
    const router = useRouter();

    return (
        <button
            onClick={() => {
                setIsShown(false);
                router.push('/cart');
            }}
            className={"px-4 flex font-medium justify-center items-center gap-x-3 rounded-md py-3 bg-transparent outline-none active:scale-95 text-primary hover:bg-primary ring-1 ring-primary duration-200 ease-out hover:text-white"}
        >
            <FaEye/>
            Переглянути кошик
        </button>
    )
}

export default CartHoverMenuCartButton;