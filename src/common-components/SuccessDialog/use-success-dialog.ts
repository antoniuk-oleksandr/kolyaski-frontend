import {useEffect, useState} from "react";
import {effect} from "@preact/signals-react";
import {successDialogSignal} from "@/common-components/SuccessDialog/success-dialog-signal";

export const useSuccessDialog = (toggle: () => void,) => {
    const [dialogContext, setDialogContext] = useState({
        value: 0,
        text: "",
    });

    useEffect(() => {
        effect(() => {
            const {value, text} = successDialogSignal.value;
            if (value === 0) return
            setDialogContext({value, text});
            toggle();
        })
    }, []);

    useEffect(() => {
        if (dialogContext.text === "") return;

        const id = setTimeout(() => {
            toggle();
        }, 2000);

        return () => clearTimeout(id);
    }, [dialogContext.value]);

    return {dialogText: dialogContext.text};
}