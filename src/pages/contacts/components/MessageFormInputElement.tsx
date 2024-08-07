import {useFormContext} from "react-hook-form";
import {useMessageFormError} from "@/pages/contacts/components/use-message-form-error";
import MessageFormError from "@/pages/contacts/components/MessageFormError";
import {useEffect, useRef, useState} from "react";
import MessageFormInputIcon from "@/pages/contacts/components/MessageFormInputIcon/MessageFormInputIcon";
import {useMessageFormInputFocus} from "@/pages/contacts/use-meessage-form-input-focus";

type MessageFormInputElementProps = {
    id: string,
    required?: boolean,
    type?: "text" | "number" | "password",
    autoFocus?: boolean,
}

const MessageFormInputElement = (props: MessageFormInputElementProps) => {
    const {id, required, type, autoFocus} = props;
    const {register, formState: {errors}} = useFormContext();
    const {isErrorPresent, setIsErrorPresent} = useMessageFormError(errors[id]);
    const [passwordShown, setPasswordShown] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    let {ref: formRef} = register(id);
    useMessageFormInputFocus(autoFocus, inputRef);

    return (
        <>
            <input
                id={id}
                autoComplete={"off"}
                {...register(id, {required})}
                ref={(ref) => {
                    formRef(ref);
                    inputRef.current = ref;
                }}
                onInput={() => setIsErrorPresent(false)}
                type={passwordShown ? "text" : type ? type : "text"}
                className={`outline-none rounded-md mb-1 text-sm py-2 px-3 ring-1 ring-neutral-200 duration-200 ease-out focus:ring-primary hover:ring-primary
                ${isErrorPresent ? '!ring-red-500' : ''}`}
                autoFocus={autoFocus}
            />
            <MessageFormInputIcon {...props} passwordShown={passwordShown} setPasswordShown={setPasswordShown}/>
            <MessageFormError error={errors[id]}/>
        </>
    )
}

export default MessageFormInputElement;