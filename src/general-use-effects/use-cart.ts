import {Dispatch, useEffect} from "react";
import {UnknownAction} from "redux";
import {getCartItemsFromLocalStorage} from "@/utils/local-storage-utils";
import {setCartProducts} from "@/redux/cart-slice";

export const useCart = (dispatch: Dispatch<UnknownAction>) => {
    useEffect(() => {
        const cartItems = getCartItemsFromLocalStorage();
        dispatch(setCartProducts(cartItems));
    }, []);
}