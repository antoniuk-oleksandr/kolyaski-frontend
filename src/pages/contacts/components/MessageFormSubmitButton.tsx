import Button from "@/common-components/Button";

type MessageFormSubmitButtonProps = {
    sending: boolean,
}

const MessageFormSubmitButton = (props: MessageFormSubmitButtonProps) => {
    const {sending} = props;

    return (
        <Button
            className={"h-11 w-36"}
            type={"submit"}
            sending={sending}
        >
            Відправити
        </Button>
    )
}

export default MessageFormSubmitButton;