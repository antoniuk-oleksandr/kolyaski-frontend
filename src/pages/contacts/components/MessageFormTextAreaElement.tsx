import {useFormContext} from "react-hook-form";
import {useMessageFormError} from "@/pages/contacts/components/use-message-form-error";
import MessageFormError from "@/pages/contacts/components/MessageFormError";

type MessageFormTextAreaElementProps = {
    id: string,
    required?: boolean,
}

const MessageFormTextAreaElement = (props: MessageFormTextAreaElementProps) => {
    const {id, required} = props;
    const {register, formState: {errors}} = useFormContext();
    const {isErrorPresent, setIsErrorPresent} = useMessageFormError(errors[id]);

    return (
        <>
        <textarea
            style={{resize: "none"}}
            rows={6}
            id={id}
            {...register(id, {required})}
            onInput={() => setIsErrorPresent(false)}
            className={`outline-none rounded-md text-sm mb-1 py-2 px-3 ring-1 ring-neutral-200 duration-200 ease-out focus:ring-primary hover:ring-primary 
            ${isErrorPresent ? '!ring-red-500' : ''}`}
        />
            <MessageFormError error={errors[id]}/>
        </>
    )
}

export default MessageFormTextAreaElement;