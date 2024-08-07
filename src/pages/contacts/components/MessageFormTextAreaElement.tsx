import {useFormContext} from "react-hook-form";
import {useMessageFormError} from "@/pages/contacts/components/use-message-form-error";
import MessageFormError from "@/pages/contacts/components/MessageFormError";
import {useRef} from "react";
import {useMessageFormInputFocus} from "@/pages/contacts/use-meessage-form-input-focus";

type MessageFormTextAreaElementProps = {
    id: string,
    required?: boolean,
    autoFocus?: boolean,
}

const MessageFormTextAreaElement = (props: MessageFormTextAreaElementProps) => {
    const {id, required, autoFocus} = props;
    const {register, formState: {errors}} = useFormContext();
    const {isErrorPresent, setIsErrorPresent} = useMessageFormError(errors[id]);
    const textAreaRef = useRef<HTMLElement | null>(null);

    let {ref: formRef} = register(id);
    useMessageFormInputFocus(autoFocus, textAreaRef);

    return (
        <>
            <textarea
                style={{resize: "none"}}
                rows={6}
                id={id}
                {...register(id, {required})}
                ref={(ref) => {
                    formRef(ref);
                    textAreaRef.current = ref;
                }}
                onInput={() => setIsErrorPresent(false)}
                className={`outline-none rounded-md text-sm mb-1 py-2 px-3 ring-1 ring-neutral-200 duration-200 ease-out focus:ring-primary hover:ring-primary 
                ${isErrorPresent ? '!ring-red-500' : ''}`}
            />
            <MessageFormError error={errors[id]}/>
        </>
    )
}

export default MessageFormTextAreaElement;