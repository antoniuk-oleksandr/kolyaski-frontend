import {LayoutProps} from "@/types/LayoutProps";
import {Dispatch, SetStateAction} from "react";

type MessageFormInputIconLayoutProps = LayoutProps & {
    setPasswordShown: Dispatch<SetStateAction<boolean>>,
    type?: "text" | "number" | "password",
}

const MessageFormInputIconLayout = (props: MessageFormInputIconLayoutProps) => {
    const {children, setPasswordShown, type} = props;

    return (
        <div
            onClick={() => setPasswordShown((prev) => !prev)}
            className={`absolute mt-[26px] cursor-pointer p-1 top-0 right-0 mr-2 ${type === 'password' ? '' : 'hidden'}`}>
            {children}
        </div>
    )
}

export default MessageFormInputIconLayout;