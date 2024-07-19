import {useFormContext} from "react-hook-form";
import {useMessageFormError} from "@/pages/contacts/components/use-message-form-error";
import MessageFormError from "@/pages/contacts/components/MessageFormError";
import {FaEye, FaEyeSlash} from "react-icons/fa6";
import {useState} from "react";
import MessageFormInputIcon from "@/pages/contacts/components/MessageFormInputIcon/MessageFormInputIcon";

type MessageFormInputElementProps = {
    id: string,
    required?: boolean,
    type?: "text" | "number" | "password",
}

const MessageFormInputElement = (props: MessageFormInputElementProps) => {
    const {id, required, type} = props;
    const {register, formState: {errors}} = useFormContext();
    const {isErrorPresent, setIsErrorPresent} = useMessageFormError(errors[id]);
    const [passwordShown, setPasswordShown] = useState(false);

    return (
        <>
            <input
                id={id}
                autoComplete={"off"}
                {...register(id, {required})}
                onInput={() => setIsErrorPresent(false)}
                className={`outline-none rounded-md mb-1 text-sm py-2 px-3 ring-1 ring-neutral-200 duration-200 ease-out focus:ring-primary hover:ring-primary 
                ${isErrorPresent ? '!ring-red-500' : ''}`}
                type={passwordShown ? "text" : type ? type : "text"}
            />
            <MessageFormInputIcon {...props} passwordShown={passwordShown} setPasswordShown={setPasswordShown}/>
            <MessageFormError error={errors[id]}/>
        </>
    )
}

export default MessageFormInputElement;