import {CartItem} from "@/types/CartItem";

export const getCartItemsFromLocalStorage = (): CartItem[] => {
    const cartItems = localStorage.getItem("cartItems");
    if (!cartItems) {
        localStorage.setItem("cartItems", JSON.stringify([]));
        return [];
    }
    return JSON.parse(cartItems);
}

export const addCartProductToLocalStorage = (newCartItem: CartItem) => {
    const cartItems = getCartItemsFromLocalStorage();
    cartItems.push(newCartItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export const removeCartProductFromLocalStorage = (newCartItemId: number) => {
    let cartItems = getCartItemsFromLocalStorage();
    cartItems = cartItems.filter(item => item.product.id !== newCartItemId);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export const changeCartProductQuantityInLocalStorage = (id: number, newQuantity: number) => {
    let cartItems = getCartItemsFromLocalStorage();
    cartItems = cartItems.map((cartItem) => {
        if (cartItem.product.id === id) {
            return {...cartItem, quantity: newQuantity};
        }
        return cartItem;
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}