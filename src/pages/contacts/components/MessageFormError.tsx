type  MessageFormErrorProps = {
    error: any,
}

const MessageFormError = (props: MessageFormErrorProps) => {
    const {error} = props;

    if (error === undefined) return null;
    return (
        <span className={"text-red-500 absolute -bottom-5 text-sm left-0"}>{error.message}</span>
    )
}

export default MessageFormError;