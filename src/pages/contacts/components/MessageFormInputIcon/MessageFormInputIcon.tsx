import MessageFormInputIconLayout from "./MessageFormInputIconLayout";
import {FaEye, FaEyeSlash} from "react-icons/fa6";
import {Dispatch, SetStateAction} from "react";

type MessageFormInputIconProps = {
    passwordShown: boolean,
    setPasswordShown: Dispatch<SetStateAction<boolean>>,
    type?: "text" | "number" | "password",
}

const MessageFormInputIcon = (props: MessageFormInputIconProps) => {
    const {passwordShown} = props;

    return (
        <MessageFormInputIconLayout {...props}>
            {passwordShown ? <FaEyeSlash/> : <FaEye/>}
        </MessageFormInputIconLayout>
    )
}

export default MessageFormInputIcon;