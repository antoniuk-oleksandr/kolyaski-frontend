import {CartItem} from "@/types/CartItem";
import {Dispatch, MutableRefObject, SetStateAction} from "react";

export const calcTotalCartPrice = (product: CartItem[]) => {
    return product.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
}

export const checkIfNewProductAddedToCart = (
    initialCartItems: MutableRefObject<CartItem[] | null>,
    newCartItems: CartItem[],
) => {
    if(!initialCartItems.current) return true;
    if(initialCartItems.current.length !== newCartItems.length) return true;

    return newCartItems.some((item, index) => {
        if(!initialCartItems.current) return true;

        const oldItem = initialCartItems.current[index];
        return item.product.id !== oldItem.product.id;
    });
}

export const updateCartItemsQuantity = (
    newItems: CartItem[],
    setCartItems: Dispatch<SetStateAction<CartItem[] | null>>,
) => {
    setCartItems((prev) => {
        if(!prev) return null;
        return prev.map((item) => {
            const newItem = newItems.find((newItem) => newItem.product.id === item.product.id);
            if(!newItem) return item;
            return {
                ...item,
                quantity: newItem.quantity,
            }
        });
    });
}