import MessageFormLayout from "./MessageFormLayout";
import MessageFormInput from "@/pages/contacts/components/MessageFormInput/MessageFormInput";
import MessageFormSubmitButton from "@/pages/contacts/components/MessageFormSubmitButton";
import { useState } from "react";

const MessageForm = () => {
    const [sending, setSending] = useState(false);

    return (
        <MessageFormLayout setSending={setSending}>
            <MessageFormInput id={'name'} label={'І\'мя'} required/>
            <MessageFormInput id={'email'} label={'E-mail'} required/>
            <MessageFormInput id={'message'} label={'Повідомлення'} textArea required/>
            <MessageFormSubmitButton sending={sending}/>
        </MessageFormLayout>
    )
}

export default MessageForm;