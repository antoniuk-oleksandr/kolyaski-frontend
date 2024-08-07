import {useEffect} from "react";
import {CartItem} from "@/types/CartItem";

export const useOrdersProducts = (setValue: any, products: CartItem[]) => {
    useEffect(() => {
        setValue("products", products);
    }, [products]);
}