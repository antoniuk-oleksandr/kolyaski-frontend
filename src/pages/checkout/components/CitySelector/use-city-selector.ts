import {useEffect} from "react";
import {effect} from "@preact/signals-react";
import {citySelectorOpenSignal} from "@/pages/checkout/components/CitySelector/signals/city-selector-open-signal";
import {citySelectorCloseSignal} from "@/pages/checkout/components/CitySelector/signals/city-selector-close-signal";

export const useCitySelector = (open: () => void, close: () => void) => {
    useEffect(() => {
        citySelectorOpenSignal.value = 0;
        effect(() => {
            const signalValue = citySelectorOpenSignal.value;
            if (signalValue === 0) return;
            open();
        });
    }, []);

    useEffect(() => {
        citySelectorCloseSignal.value = 0;
        effect(() => {
            const signalValue = citySelectorCloseSignal.value;
            if (signalValue === 0) return;
            close();
        });
    }, []);
}