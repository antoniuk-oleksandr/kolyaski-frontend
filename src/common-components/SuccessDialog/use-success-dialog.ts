import {useEffect} from "react";
import {effect} from "@preact/signals-react";
import {successDialogSignal} from "@/common-components/SuccessDialog/success-dialog-signal";

export const useSuccessDialog = (toggle: () => void,) => {
    useEffect(() => {
        effect(() => {
            const value = successDialogSignal.value;
            if(value === 0) return;
            toggle();
        })
    }, [])
}