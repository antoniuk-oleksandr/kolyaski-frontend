import Button from "@/common-components/Button";
import {useFormContext} from "react-hook-form";
import {checkEditProductData} from "@/pages/admin/products/[id]/helpers";
import {ProductData} from "@/types/ProductData";

type SubmitProductEditingButtonProps = {
    sending: boolean,
    initialProductData: ProductData,
}

const SubmitProductEditingButton = (props: SubmitProductEditingButtonProps) => {
    const {sending, initialProductData} = props;
    const {watch} = useFormContext();
    const disabled = Object.keys(checkEditProductData(initialProductData, watch() as ProductData)).length === 0;

    return (
        <Button
            disabled={disabled}
            className={"w-32 h-11"}
            sending={sending}
            type={"submit"}
        >Підтвердити</Button>
    )
}

export default SubmitProductEditingButton;