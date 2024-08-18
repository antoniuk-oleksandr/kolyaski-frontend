import {MutableRefObject, useEffect} from "react";
import {effect} from "@preact/signals-react";
import {AdminModalSignalType} from "@/types/AdminModalSignalType";
import {newProductModalSignal} from "@/pages/admin/signals/new-product-modal-signal";

export const useNewProductModal = (
    open: () => void,
    close: () => void,
    prevModalValue: MutableRefObject<AdminModalSignalType>,
) => {
    useEffect(() => {
        newProductModalSignal.value = {close: 0, open: 0};

        const clear = effect(() => {
            const {value} = newProductModalSignal;

            if(prevModalValue.current.close < value.close) close();

            if (value.open === 0) return;
            if(prevModalValue.current.open < value.open) open();

            prevModalValue.current = {close: value.close, open: value.open};
        });

        return () => clear();
    }, []);
}