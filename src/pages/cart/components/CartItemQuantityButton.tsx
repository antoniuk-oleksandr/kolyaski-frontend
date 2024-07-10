import {ReactNode} from "react";

type CartItemQuantityButtonProps = {
    icon: ReactNode,
    clickAction: () => void,
}

const CartItemQuantityButton = (props: CartItemQuantityButtonProps) => {
    const {icon, clickAction} = props;

    return (
        <button
            className={"rounded-full bg-neutral-100 size-8 text-base grid place-items-center hover:bg-neutral-200 active:scale-95 outline-none duration-200 ease-out"}
            onClick={clickAction}
        >
            {icon}
        </button>
    )
}

export default CartItemQuantityButton;