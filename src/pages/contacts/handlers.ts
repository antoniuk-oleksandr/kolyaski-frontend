import {NextRouter} from "next/router";
import {successDialogSignal} from "@/common-components/SuccessDialog/success-dialog-signal";
import {postContactRequest} from "@/api/post-contact-request";

export const handleMessageFormSubmit = async (data: any, router: NextRouter) => {
    successDialogSignal.value = ++successDialogSignal.value;
    await postContactRequest(data);
    await router.push("/");
}