import {MutableRefObject, useEffect} from "react";
import {effect} from "@preact/signals-react";
import {orderModalSignal} from "@/pages/admin/signals/order-modal-signal";
import {AdminModalSignalType} from "@/types/AdminModalSignalType";

export const useOrderModal = (
    open: () => void,
    close: () => void,
    prevModalValue: MutableRefObject<AdminModalSignalType>,
) => {

    useEffect(() => {
        orderModalSignal.value = {open: 0, close: 0};

        const clear = effect(() => {
            const {value} = orderModalSignal;

            if (prevModalValue.current.close < value.close) close();

            if (value.open === 0) return;
            if (prevModalValue.current.open < value.open) open();

            prevModalValue.current = {close: value.close, open: value.open};
        });

        return () => clear();
    }, [orderModalSignal]);
}