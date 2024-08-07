import {MutableRefObject, useEffect} from "react";
import {effect} from "@preact/signals-react";
import {orderModalSignal} from "@/pages/admin/signals/order-modal-signal";
import {AddOrderProductModalSignalType} from "@/types/AddOrderProductModalSignalType";

export const useOrderModal = (
    toggle: () => void,
    close: () => void,
    prevModalValue: MutableRefObject<AddOrderProductModalSignalType>,
) => {

    useEffect(() => {
        effect(() => {
            const {value} = orderModalSignal;

            if(prevModalValue.current.close < value.close) close();

            if (value.toggle === 0) return;
            if(prevModalValue.current.toggle < value.toggle) toggle();

            prevModalValue.current = {close: value.close, toggle: value.toggle};
        });
    }, [orderModalSignal]);
}