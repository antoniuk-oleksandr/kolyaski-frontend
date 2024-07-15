import {useEffect} from "react";
import {effect} from "@preact/signals-react";
import {citySignal} from "@/pages/checkout/signals/city-signal";
import {warehouseSignal} from "@/pages/checkout/signals/warehouse-signal";
import {CartItem} from "@/types/CartItem";

export const useCheckoutForm = (methods: any, products: CartItem[]) => {
    useEffect(() => {
        methods.setValue("products", products);

        effect(() => {
            const value = citySignal.value;
            if(!value) return;
            methods.setValue("city", value);
        })
    }, []);

    useEffect(() => {
        effect(() => {
            const value = warehouseSignal.value;
            if(!value) return;
            methods.setValue("warehouse", value);
        })
    }, []);
}