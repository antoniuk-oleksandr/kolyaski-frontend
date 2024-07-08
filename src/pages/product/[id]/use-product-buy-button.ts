import {CartState} from "@/types/CartState";
import {useEffect, useState} from "react";
import {ProductData} from "@/types/ProductData";

export const useProductBuyButton = (cart: CartState, product: ProductData) => {
    const [inCart, setInCart] = useState<boolean | null>(null);

    useEffect(() => {
        const found = cart.products.some((item) => {
            return product.id === item.product.id;
        });
        setInCart(found);
    }, [cart.products]);

    return {inCart};
}