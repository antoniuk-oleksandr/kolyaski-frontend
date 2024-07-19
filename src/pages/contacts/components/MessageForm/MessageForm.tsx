import MessageFormLayout from "./MessageFormLayout";
import MessageFormInput from "@/pages/contacts/components/MessageFormInput/MessageFormInput";
import MessageFormSubmitButton from "@/pages/contacts/components/MessageFormSubmitButton";

const MessageForm = () => {
    return (
        <MessageFormLayout>
            <MessageFormInput id={'name'} label={'І\'мя'} required/>
            <MessageFormInput id={'email'} label={'E-mail'} required/>
            <MessageFormInput id={'message'} label={'Повідомлення'} textArea required/>
            <MessageFormSubmitButton/>
        </MessageFormLayout>
    )
}

export default MessageForm;