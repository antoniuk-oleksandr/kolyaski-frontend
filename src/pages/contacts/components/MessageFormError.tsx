import {BiSolidError} from "react-icons/bi";

type  MessageFormErrorProps = {
    error: any,
}

const MessageFormError = (props: MessageFormErrorProps) => {
    const {error} = props;

    if (error === undefined) return null;
    return (
        <div className={"flex gap-x-1 font-normal text-sm leading-3.5 items-center text-red-500 absolute -bottom-3.5 left-0"}>
            <BiSolidError className={"text-base"}/>
            <span>{error.message}</span>
        </div>
    )
}

export default MessageFormError;