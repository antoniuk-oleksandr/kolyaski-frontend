import MessageFormLayout from "./MessageFormLayout";
import MessageFormInput from "@/pages/contacts/components/MessageFormInput/MessageFormInput";
import MessageFormSubmitButton from "@/pages/contacts/components/MessageFormSubmitButton";

const MessageForm = () => {
    return (
        <MessageFormLayout>
            <MessageFormInput id={'name'} label={'Ваше і\'мя'} required/>
            <MessageFormInput id={'email'} label={'Ваш e-mail'} required/>
            <MessageFormInput id={'message'} label={'Ваше повідомлення (не обов\'язково)'} textArea/>
            <MessageFormSubmitButton/>
        </MessageFormLayout>
    )
}

export default MessageForm;