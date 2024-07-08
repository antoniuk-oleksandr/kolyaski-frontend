import {NextRouter} from "next/router";
import {Dispatch, SetStateAction} from "react";
import {UnknownAction} from "redux";
import {removeCartProduct} from "@/redux/cart-slice";
import {removeCartProductFromLocalStorage} from "@/utils/local-storage-utils";

export const handleCartHoverMenuItemTextClick = (
    router: NextRouter,
    setIsShown: Dispatch<SetStateAction<boolean>>,
    id: number,
) => {
    setIsShown(false);
    router.push(`/product/${id}`);
}

export const handleCartItemRemoveButtonClick = (
    dispatch: Dispatch<UnknownAction>,
    id: number,
) => {
    dispatch(removeCartProduct(id));
    removeCartProductFromLocalStorage(id);
}