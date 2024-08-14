import Button from "@/common-components/Button";

type NewProductSubmitButtonProps = {
    sending: boolean,
}

const NewProductSubmitButton = (props: NewProductSubmitButtonProps) => {
    const {sending} = props;

    return (
        <Button
            sending={sending}
            className={"w-32 h-11"}
            type={"submit"}
        >Підтвердити</Button>
    )
}

export default NewProductSubmitButton;