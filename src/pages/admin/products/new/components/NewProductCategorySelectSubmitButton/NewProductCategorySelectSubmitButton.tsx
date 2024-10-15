import Button from "@/common-components/Button";
import {useFormContext} from "react-hook-form";

const NewProductCategorySelectSubmitButton = () => {
    const {formState: {isSubmitting}} = useFormContext();

    return (
        <Button
            type={"submit"}
            sending={isSubmitting}
            className={"w-36 h-11"}
        >
            Додати файл
        </Button>
    )
}

export default NewProductCategorySelectSubmitButton;