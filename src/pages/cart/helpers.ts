import {setCartProductQuantity} from "@/redux/cart-slice";
import {changeCartProductQuantityInLocalStorage} from "@/utils/local-storage-utils";
import {UnknownAction} from "redux";
import {Dispatch} from "react";

export const changeQuantity = (
    id: number,
    newQuantity: number,
    dispatch: Dispatch<UnknownAction>,
) => {
    if (newQuantity === 0) return;
    dispatch(setCartProductQuantity({id, newQuantity}));
    changeCartProductQuantityInLocalStorage(id, newQuantity);
}
