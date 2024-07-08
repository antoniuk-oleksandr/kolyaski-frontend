import {CartItem} from "@/types/CartItem";

export const calcTotalCartPrice = (product: CartItem[]) => {
    return product.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
}