import {useRef} from "react";
import {CartState} from "@/types/CartState";
import {useEffect, useState} from "react";
import {getProductByIdRequest} from "@/api/get-product-by-id-request";
import {CartItem} from "@/types/CartItem";
import {checkIfNewProductAddedToCart, updateCartItemsQuantity} from "@/common-components/Header/helpers";

export const useHeaderCartItems = (cart: CartState) => {
    const [cartItems, setCartItems] = useState<CartItem[] | null>(null);
    const initialCartItems = useRef<null | CartItem[]>(null);

    useEffect(() => {
        if (cart.products.length === 0) {
            setCartItems([]);
            return;
        }

        const makeRequest = async () => {
            const responses: CartItem[] = [];
            console.log(cart.products.length);
            await Promise.all(cart.products.map(async item => {
                const isInArray = cartItems?.some((cartItem) => cartItem.product.id === item.product.id);

                if (isInArray) {
                    cartItems?.forEach((cartItem) => {
                        if (cartItem.product.id === item.product.id) {
                            console.log("added an old product");
                            responses.push({
                                product: cartItem.product,
                                quantity: item.quantity,
                            });
                        }
                    });
                } else {
                    console.log("added a new product");
                    const response = await getProductByIdRequest(item.product.id);
                    responses.push({
                        product: response.product,
                        quantity: item.quantity,
                    });
                }

            }));
            setCartItems(responses);
        }

        if (checkIfNewProductAddedToCart(initialCartItems, cart.products)) {
            makeRequest();
            initialCartItems.current = cart.products;
        } else updateCartItemsQuantity(cart.products, setCartItems);
    }, [cart]);

    return {cartItems};
}