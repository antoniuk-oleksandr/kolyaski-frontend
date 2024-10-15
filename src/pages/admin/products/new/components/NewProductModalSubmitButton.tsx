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
            className={"w-fit h-11"}
        >
            Отримати категорії
        </Button>
    )
}

export default NewProductModalSubmitButton;