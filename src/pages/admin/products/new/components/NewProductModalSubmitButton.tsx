import Button from "@/common-components/Button";

type NewProductModalSubmitButtonProps = {
    sending: boolean,
}

const NewProductModalSubmitButton = (props: NewProductModalSubmitButtonProps) => {
    const {sending} = props;

    return (
        <Button
            type={"submit"}
            sending={sending}
            className={"w-36 h-11"}
        >
            Додати файл
        </Button>
    )
}

export default NewProductModalSubmitButton;