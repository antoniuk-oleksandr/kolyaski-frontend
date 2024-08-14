import {useFormContext} from "react-hook-form";
import MessageFormInputLayout from "@/pages/contacts/components/MessageFormInput/MessageFormInputLayout";
import MessageFormInputElement from "@/pages/contacts/components/MessageFormInputElement";
import MessageFormTextAreaElement from "@/pages/contacts/components/MessageFormTextAreaElement";
import {useMessageFormError} from "@/pages/contacts/components/use-message-form-error";

type MessageFromInputProps = {
    id: string,
    label: string,
    textArea?: boolean,
    required?: boolean,
    type?: "text" | "number" | "password",
    autoFocus?: boolean,
}

const MessageFromInput = (props: MessageFromInputProps) => {
    const {textArea, id, label} = props;
    const {formState: {errors}} = useFormContext();
    const error = errors[id];
    const {isErrorPresent, setIsErrorPresent} = useMessageFormError(error);

    return (
        <MessageFormInputLayout>
            <label className={`text-sm ${isErrorPresent ? 'text-red-500' : ''}`} htmlFor={id}>{label}</label>
            {
                textArea
                    ? <MessageFormTextAreaElement
                        error={error}
                        isErrorPresent={isErrorPresent}
                        setIsErrorPresent={setIsErrorPresent}
                        {...props}
                    />
                    : <MessageFormInputElement
                        error={error}
                        isErrorPresent={isErrorPresent}
                        setIsErrorPresent={setIsErrorPresent}
                        {...props}
                    />
            }
        </MessageFormInputLayout>
    )
}

export default MessageFromInput;