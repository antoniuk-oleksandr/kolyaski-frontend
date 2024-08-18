import {useEffect, useState} from "react";
import {effect} from "@preact/signals-react";
import {successDialogSignal} from "@/common-components/SuccessDialog/success-dialog-signal";
import {boolean} from "zod";

export const useSuccessDialog = (toggle: () => void,) => {
    const [dialogContext, setDialogContext] = useState({
        value: 0,
        text: "",
        success: true,
    });

    useEffect(() => {
        effect(() => {
            const {value, text, success} = successDialogSignal.value;
            if (value === 0) return
            setDialogContext({value, text, success});
            toggle();
        })
    }, []);

    useEffect(() => {
        if (dialogContext.text === "") return;

        const id = setTimeout(() => {
            toggle();
        }, 3000);

        return () => clearTimeout(id);
    }, [dialogContext.value]);

    return {dialogText: dialogContext.text, ...dialogContext};
}