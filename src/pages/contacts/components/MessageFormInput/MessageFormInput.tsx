import {useFormContext} from "react-hook-form";
import MessageFormInputLayout from "@/pages/contacts/components/MessageFormInput/MessageFormInputLayout";
import MessageFormInputElement from "@/pages/contacts/components/MessageFormInputElement";
import MessageFormTextAreaElement from "@/pages/contacts/components/MessageFormTextAreaElement";

type MessageFromInputProps = {
    id: string,
    label: string,
    textArea?: boolean,
    required?: boolean,
}

const MessageFromInput = (props: MessageFromInputProps) => {
    const {textArea, id, label} = props;

    return (
        <MessageFormInputLayout>
            <label className={"font-medium"} htmlFor={id}>{label}</label>
            {
                textArea
                    ? <MessageFormTextAreaElement {...props}/>
                    : <MessageFormInputElement {...props}/>
            }
        </MessageFormInputLayout>
    )
}

export default MessageFromInput;