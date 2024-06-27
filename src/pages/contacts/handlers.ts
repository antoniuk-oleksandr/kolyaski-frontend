import {NextRouter} from "next/router";
import {successDialogSignal} from "@/common-components/SuccessDialog/success-dialog-signal";

export const handleMessageFormSubmit = (data: any, router: NextRouter) => {
    console.log(data);
    successDialogSignal.value = ++successDialogSignal.value;
    router.push("/");
}