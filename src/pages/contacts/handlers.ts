import {NextRouter} from "next/router";
import {postContactRequest} from "@/api/post-contact-request";
import {setNotification} from "@/utils/utils";
import {Dispatch, SetStateAction} from "react";

export const handleMessageFormSubmit = async (
    data: any,
    router: NextRouter,
    setSending: Dispatch<SetStateAction<boolean>>,
) => {
    setSending(true);
    await postContactRequest(data);
    await router.push("/");
    setNotification("Ваш коментар було успішно відправлено!", true);
    setSending(false);
}