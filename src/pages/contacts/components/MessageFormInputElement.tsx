import {useFormContext} from "react-hook-form";
import {useMessageFormError} from "@/pages/contacts/components/use-message-form-error";
import MessageFormError from "@/pages/contacts/components/MessageFormError";

type MessageFormInputElementProps = {
    id: string,
    required?: boolean,
}

const MessageFormInputElement = (props: MessageFormInputElementProps) => {
    const {id, required,} = props;
    const {register, formState: {errors}} = useFormContext();
    const {isErrorPresent, setIsErrorPresent} = useMessageFormError(errors[id]);

    return (
        <>
            <input
                id={id}
                autoComplete={"off"}
                {...register(id, {required})}
                onInput={() => setIsErrorPresent(false)}
                className={`outline-none rounded-md text-sm py-2 px-3 ring-1 ring-neutral-200 duration-200 ease-out focus:ring-primary hover:ring-primary 
                ${isErrorPresent ? '!ring-red-500' : ''}`}
                type="text"
            />
            <MessageFormError error={errors[id]}/>
        </>
    )
}

export default MessageFormInputElement;