import CartHoverMenuItemTextLayout from "./CartHoverMenuItemTextLayout";
import {IoClose} from "react-icons/io5";
import {NumberFormatter} from "@mantine/core";
import {useRouter} from "next/router";
import {Dispatch, SetStateAction} from "react";
import {handleCartHoverMenuItemTextClick} from "@/common-components/Header/handlers";

type CartHoverMenuItemTextProps = {
    quantity: number,
    price: number,
    name: string,
    id: number,
    setIsShown: Dispatch<SetStateAction<boolean>>,
}

const CartHoverMenuItemText = (props: CartHoverMenuItemTextProps) => {
    const {quantity, price, name, id, setIsShown} = props;
    const router = useRouter();

    return (
        <CartHoverMenuItemTextLayout>
            <p
                onClick={() => handleCartHoverMenuItemTextClick(router, setIsShown, id)}
                className={"text line-clamp-2 hover:text-secondary duration-200 ease-out cursor-pointer"}
            >{name}</p>
            <div className={"flex gap-x-1 items-center"}>
                <span>{quantity}</span>
                <IoClose className={"text-xs"}/>
                <NumberFormatter
                    value={price}
                    thousandSeparator={","}
                    suffix={" грн."}
                />
            </div>
        </CartHoverMenuItemTextLayout>
    )
}

export default CartHoverMenuItemText;